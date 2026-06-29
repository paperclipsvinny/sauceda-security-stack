// .eleventy.js
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("Assets");
  
  // Date Filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // ISO Date filter for sitemap
  eleventyConfig.addFilter("isoDate", function(date) {
    if (!date) return "";
    if (typeof date === 'string') date = new Date(date);
    return date.toISOString().split('T')[0];
  });

  // Slugify filter
  eleventyConfig.addFilter("slugify", function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", function(text, length = 200) {
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + '...';
  });

  // Strip tags filter
  eleventyConfig.addFilter("striptags", function(text) {
    return text.replace(/<[^>]*>/g, '');
  });

  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Tag list collection
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

  // Projects collection
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
};
