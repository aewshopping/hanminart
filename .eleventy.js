const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css"
  ]);
  eleventyConfig.addPassthroughCopy("public");
  
  const md = new markdownIt({
  html: true,
});

  eleventyConfig.addFilter("markdown", (content) => {
  return md.render(content);
});
 
  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  
    // Populates environment variables into process.env and makes it available in 11ty's global data https://github.com/11ty/eleventy/issues/782.
  require('dotenv').config();
  eleventyConfig.addGlobalData('env', process.env);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
