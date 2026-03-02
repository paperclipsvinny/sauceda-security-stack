// .eleventy.js
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginRss);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("Assets");

  //Date Filter 
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    
    // Handle string dates
    if (typeof date === 'string') {
      date = new Date(date);
    }
    
    // Format date as "Month Day, Year"
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // Collections
eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi.getFilteredByTag("posts").sort((a, b) => {
    return b.date - a.date; // Descending order (newest first)
  });
});

//  Filters 
eleventyConfig.addFilter("slugify", function(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
});

eleventyConfig.addFilter("truncate", function(text, length = 200) {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
});

eleventyConfig.addFilter("striptags", function(text) {
  return text.replace(/<[^>]*>/g, '');
});

// collections
eleventyConfig.addCollection("tagList", function(collectionApi) {
  const tagSet = new Set();
  collectionApi.getAll().forEach(item => {
    if ("tags" in item.data) {
      let tags = item.data.tags;
      if (typeof tags === "string") tags = [tags];
      tags.forEach(tag => {
        if (tag !== "posts") tagSet.add(tag);
      });
    }
  });
  return Array.from(tagSet).sort();
});

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("project");
  });

  // Directory settings
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
  
  //google date iso format
    eleventyConfig.addFilter("isoDate", function(date) {
    if (!date) return "";
    if (typeof date === 'string') date = new Date(date);
    return date.toISOString().split('T')[0];
  });

};
