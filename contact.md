---
layout: layouts/base.njk
title: Contact
---

<style>
  main {
    max-width: 800px;
  }

  .terminal-container {
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 2rem;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.95rem;
    line-height: 1.8;
  }

  .terminal-header {
    color: var(--accent-color);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .terminal-line {
    margin-bottom: 0.5rem;
  }

  .terminal-prompt {
    color: var(--accent-color);
    margin-right: 0.5rem;
  }

  .terminal-label {
    color: rgba(255,255,255,0.7);
    margin-right: 0.5rem;
  }

  .terminal-value {
    color: var(--text-color);
  }

  .terminal-value a {
    color: var(--text-color);
    text-decoration: none;
    border-bottom: 1px dotted var(--accent-color);
  }

  .terminal-value a:hover {
    color: var(--accent-color);
  }

  .section-break {
    margin: 2rem 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 2rem;
  }

  .pgp-block {
    background-color: rgba(0,0,0,0.4);
    border-left: 3px solid var(--accent-color);
    padding: 1rem;
    margin-top: 1rem;
    font-size: 0.85rem;
    overflow-x: auto;
    color: rgba(255,255,255,0.8);
  }

  .pgp-block pre {
    margin: 0;
    white-space: pre;
    font-family: inherit;
  }

  .copy-hint {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.5);
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    .terminal-container {
      padding: 1.5rem;
      font-size: 0.85rem;
    }
  }
</style>

<main>
<h1> Contact Me</h1>
<p>If something here sparks a question, conversation, or curiosity, feel free to reach out through any of the contact methods below. I’m always down for academic discussions, collaboration, or just chatting with fellow cybersecurity enthusiasts (and non-enthusiasts alike). <span class="end-of-article">&lt;/&gt;</span>
</p>
<br>
  <div class="terminal-container">
    <div class="terminal-header">
      $ cat contact.txt
    </div>

    <div class="terminal-line">
      <span class="terminal-prompt">></span>
      <span class="terminal-label">email:</span>
      <span class="terminal-value"><a href="mailto:benitosauceda@proton.me">benitosauceda@proton.me</a></span>
    </div>

    <div class="terminal-line">
      <span class="terminal-prompt">></span>
      <span class="terminal-label">discord:</span>
      <span class="terminal-value">paperclips.vinny</span>
    </div>
    <br>

    <div class="terminal-header">
      $ cat social_media.txt
    </div>

    <div class="terminal-line">
      <span class="terminal-prompt">></span>
      <span class="terminal-label">GitHub:</span>
      <span class="terminal-value"><a href="mailto:https://github.com/paperclipsvinny">github.com/paperclipsvinny/</a></span>
    </div>

    <div class="terminal-line">
      <span class="terminal-prompt">></span>
      <span class="terminal-label">linkedin:</span>
      <span class="terminal-value"><a href="https://www.linkedin.com/in/benito-sauceda/" target="_blank" rel="noopener noreferrer">linkedin.com/in/benito-sauceda</a></span>
    </div>
    <br>
    *NOTE: I infrequently check LinkedIn messages, but you're welcome to contact me there as well. 



    <div class="section-break">
      <div class="terminal-header">
        $ gpg --import public-key.asc
      </div>

      <div class="terminal-line">
        <span class="terminal-label">fingerprint:</span>
        <span class="terminal-value">E37279F186D09234FE15F3A727FDAED2D5FA0158</span>
      </div>

      <div class="pgp-block">
        <pre> -----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEaaFybxYJKwYBBAHaRw8BAQdAnLXqtNiSgCnFQOmx/BMsIgCHCWOaaey83KaL
5hkKTOS0KEJlbml0byBTYXVjZWRhIDxiZW5pdG9zYXVjZWRhQHByb3Rvbi5tZT6I
rwQTFgoAVxYhBONyefGG0JI0/hXzpyf9rtLV+gFYBQJpoXJvGxSAAAAAAAQADm1h
bnUyLDIuNSsxLjExLDIsMQIbAwULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAK
CRAn/a7S1foBWOk9AP973oAIjyi/4/RC8wtrgGg1VaEnrk/nJ5LBPiZk78czyQEA
v2kFpYDCcDqf7H2mA0jOfn6biJyBaMeV4tXvq4oV0AS4OARpoXJvEgorBgEEAZdV
AQUBAQdAwwcrN+ASfOV2hSClw1en2Ds/W5Da3b9CzmCZp/QFZS0DAQgHiJQEGBYK
ADwWIQTjcnnxhtCSNP4V86cn/a7S1foBWAUCaaFybxsUgAAAAAAEAA5tYW51Miwy
LjUrMS4xMSwyLDECGwwACgkQJ/2u0tX6AVhBCAD/SXu7KlCzROc3R1d5gwq3iDfN
XPF0mQ1ctUOoBS+y0eQA/1eyD1ap4AYhxR2JP5GBKWIxyr+mbT+d7UfCLXVT5kwD
=wjqF
-----END PGP PUBLIC KEY BLOCK-----

</pre>
      </div>
      <div class="copy-hint">
          (select and copy, or save as .asc file) | 
        <a class="copy-hint" href="/Assets/pgp/public-key.asc" download>
          Download public key (.asc)
        </a>
      </div>
    </div>
  </div>
</main>
