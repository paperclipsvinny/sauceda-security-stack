---
layout: layouts/post.njk
title: "MS17-010 - Eternal Blue"
date: 2026-03-11
tags:
  - posts
  - CVE-of-the-Week
  - Cyber Range
  - Red Team
  - Log Analysis
file_ext: ".sh"
summary: >
  Recreating the NSA's leaked EternalBlue exploit in my air-gapped, desktop cyber range. Not a matter of national security... or is it?  
thumbnail: /assets/img/posts/my-cool-post.png
---

<br>

*Note from the Author:* Welcome to the first post in my CVE of the week series! This post covers a brief overview of my findings while experimenting with the infamous EternalBlue Exploit. For a more in depth writeup of this CVE, including things like my specialized, EternalBlue-tuned sysmon config, SMB blocking Access Control List, and custom Splunk Dashboard created for this lab, check out my github: *[github.com/paperclipsvinny/cve-of-the-week](https://github.com/paperclipsvinny/cve-of-the-week)*




## Overview

<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/wannacry.png" alt="Screenshot of a computer infected by WannaCry">
  <figcaption>This post would be remiss if it didn't include at least one screenshot from the WannaCry worm.
  <a href="https://en.wikipedia.org/wiki/File:Wana_Decrypt0r_screenshot.png">Source.</a></figcaption>
</div>
In 2017, a mysterious group called the shadow brokers claimed to have hacked the NSA, and leaked some of their developed cyber weapons as proof. EternalBlue was among the leaked, and it was confirmed that The NSA knew about the vulnerability for years and kept it secret for its own exploitation. When the NSA learned the tools might have been stolen, they warned Microsoft, who released patch MS17-010 on March 14th, 2017. However, many systems failed to install the patch, and in May of 2017, WannaCry, a worm built based on the EternalBlue exploit, was released in the wild. Within hours, it had infected hundreds of thousands of machines. Because of its significance and fascinating story, I chose EternalBlue (CVE-2017-0144) as my inaugural CVE in my new weekly series. 

### Scope & Authorization 

This testing was conducted on a Windows 7 system, operated offline, for educational and defensive security research purposes only. I conducted this testing ethically, with express authorization.

### At-A-Glance
<span class="label">CVE ID:</span> CVE-2017-0143 – CVE-2017-0148<br>
<span class="label">Alias:</span> MS17-010 – EternalBlue<br>
<span class="label">Disclosed:</span> March 14, 2017<br>
<span class="label">Severity:</span> 9.8 (Critical)<br>
<span class="label">Exploit Type:</span> RCE<br>
<span class="label">Software Affected:</span> Microsoft Windows operating systems using SMBv1:<br>
Windows 7, XP, Vista (SP2), 8, 8.1, 10 (prior to build 1703)<br>
Windows Server 2003, 2008, 2008 R2, 2012, 2012 R2, 2016 <br>
<span class="label">Notable Victims:</span><br>
<span class="label">Healthcare:</span> NHS (UK), Harapan Kita Hospital (Indonesia), Instituto Nacional de Salud (Colombia)<br>
<span class="label">Shipping:</span> Maersk, FedEx (TNT Express)<br>
<span class="label">Pharmaceutical:</span> Merck (MSD)<br>
<span class="label">Automotive:</span> Renault, Nissan, Honda


<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/EternalBlue Lab Setup.png" alt="Lab Network Diagram.">
  <figcaption>My network Topology for this specific Lab.</figcaption>
</div>

## Typical Attack Chain
Although the entire lab was set up by yours truly, here’s what I did in the attacker role:
Conduct Network Service Discovery to confirm the target was vulnerable, both using nmap scans, scripts, and the metasploit auxiliary/scanner/smb/smb_ms17_010 module. 
Then, the next step was initial access- although scripts handled this, the basic bug logic is buffer overflow, where an attacker send a malformed SMB_COM_TRANSACTION2 packet where TotalDataCount exceeds DataCount, which is then allocated as a small buffer by the srv.sys driver, but copies data based on TotalDataCount, causing a buffer overflow. This enables the attacker to write past allocated memory into adjacent kernel structures. Without going into too much detail, the data written from the overflow corrupts an SRVNET_BUFFER_HDR structure which contains an Memory Descriptor List (MDL) pointer. The attacker then redirects that MDL pointer to the malicious shellcode, which is then executed in kernel mode upon processing of the next smb request. Then, the shellcode gets the payload running in user-mode with SYSTEM privileges. Once the attacker has a shell, it's just a matter of exfiltrating data, such as user hashes, etc, and whatever other actions the Attacker performs– lateral movement, obfuscation/ Anti-forensics, Denial of service, etc.

## Example Payloads
<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/kernelcrash.png" alt="Kernel panic">
  <figcaption>The early Blue Screen Of Deaths - Highlighting the Kernel Crash Error I saw many, many times while fine tuning AutoBlue</figcaption>
</div>

Payloads are truly where my lab got interesting. I originally wanted to try running the generic Metasploit EternalBlue payload against 3ndG4me’s AutoBlue script that allows further customization to write payloads that are stealthier, and then compare detections; however I could not get the AutoBlue script to reliably generate a shell without crashing the Kernel. The main issue I attribute that to was that it was incredibly hard finding the correct groom value, as well as the right named pipe (every time the Kernel crashed it caused the layouts to change). Groom connections are used to spray the kernel heap with controlled data, which is supposed to make memory layout predictable before triggering the overflow, but in my case was unreliable.
<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/metasploitgroomlogic.png" alt="the groom counter logic for metasploit's script.">
</div>

After inspecting the Metasploit script, it was clear that Metasploit was relying on smart guessing and luck- starting with an initial grooming count, and then incrementally trying different groom count values, each time increasing by 1, which is a similar tactic that I attempted, but I was not able to successfully get a shell. A lot of the time it would simply fail to connect, despite networking being configured. I suspect it might be due to Python/Impacket version incompatibilities, which I also experimented with, but eventually decided to accept that public exploit code often requires specific environments to function, and can be finicky. At least experimenting with compiling custom shellcode taught me some new things. 

 I then pivoted to attempting the same stealth techniques in Metasploit– mainly, process injection into wmiprvse.exe to hide the LSASS access, and setting the exit behavior to kill just the thread, rather than the whole process. I chose wmiprvse.exe after checking some logs generated by legitimate behavior, and realized it would be very hard to write a detection rule that doesn’t false positive on the WMI provider host (wmiprvse.exe)’s legitimate LSASS access. However, ironically, a weird quirk with PrependMigrate + EternalBlue — caused the metasploit exploit to fire multiple times and each one opened a session. Which made the stealthier attack LESS sneaky (although with subsequent testing I was not able to reproduce this error). 


<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/ManyMeterpreterSessions.png" alt="44 meterpreter sessions opened right after each other.">
  <figcaption>Is there such a thing as too many Meterpreter sessions?</figcaption>
</div>

<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/Litt Up.png" alt="Splunk caught all of these processes.">
  <figcaption>And the other question: you don't think 44 meterpreter sessions will blow my cover, right?</figcaption>
</div>
As stated though, some interesting findings was that metasploit’s default eternalblue payload is actually decently advanced, it uses reflective DLL injection and blends in with regular processes well:
<div class="image">
  <img src="/Assets/images/postimages/EternalBlue/stealthier.png" alt="Screenshot showing smaller Splunk footprint">
  <figcaption>Definitely much harder to spot the irregularities. </figcaption>
</div>

## Remediation
The easiest way to stop Eternal Blue from spreading is to patch your systems! Update to the latest version of Windows, etc. However, for the sake of this lab, I also created an access control list on my cyber range that completely shut down the exploit. The Access Control list basically blocks common SMB/NetBIOS ports such as 445, 138,139, etc. and logs any packets that match that rule, inbound on FastEthernet0/0.  


If you want to know more about the configuration of my air gapped cyber range, check out [this article on its creation](https://saucedasecurity.com/projects/cyber-range/).

Overall, this lab gave me valuable insight into how kernel and system processes operate, as well as how advanced evasion techniques can be used to avoid detection. Stay tuned for next week’s CVE! <span class="end-of-article">&lt;/&gt;</span>

<div class="references-box">
  <h3>References & Resources</h3>
  <ul>
  <li>SentinelOne — EternalBlue NSA-Developed Exploit Analysis: <a href="https://www.sentinelone.com/blog/eternalblue-nsa-developed-exploit-just-wont-die/" target="_blank" rel="noopener noreferrer">https://www.sentinelone.com/blog/eternalblue-nsa-developed-exploit-just-wont-die/</a></li>

<li>MITRE ATT&CK — Credential Dumping (T1003): <a href="https://attack.mitre.org/techniques/T1003/" target="_blank" rel="noopener noreferrer">https://attack.mitre.org/techniques/T1003/</a></li>

<li>MITRE ATT&CK — Exploitation of Remote Services (T1210): <a href="https://attack.mitre.org/techniques/T1210/" target="_blank" rel="noopener noreferrer">https://attack.mitre.org/techniques/T1210/</a></li>

<li>MITRE ATT&CK — Lateral Tool Transfer (T1570): <a href="https://attack.mitre.org/techniques/T1570/" target="_blank" rel="noopener noreferrer">https://attack.mitre.org/techniques/T1570/</a></li>

<li>Microsoft — Sysmon (System Monitor) Download: <a href="https://www.microsoft.com/en-us/download/details.aspx?id=46148" target="_blank" rel="noopener noreferrer">https://www.microsoft.com/en-us/download/details.aspx?id=46148</a></li>

<li>SwiftOnSecurity — Sysmon Configuration (GitHub): <a href="https://github.com/SwiftOnSecurity/sysmon-config" target="_blank" rel="noopener noreferrer">https://github.com/SwiftOnSecurity/sysmon-config</a></li>
  <li>Twingate — Reflective DLL Injection Glossary: <a href="https://www.twingate.com/blog/glossary/reflective%20dll%20injection" target="_blank" rel="noopener noreferrer">https://www.twingate.com/blog/glossary/reflective%20dll%20injection</a></li>
  </ul>
</div>
