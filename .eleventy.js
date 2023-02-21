const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const fg = require('fast-glob');
const css_glob = fg.sync('src/**/*.css');

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "njk", "md"]);
  
  const md = new markdownIt({
  html: true,
});

  eleventyConfig.addFilter("markdown", (content) => {
  return md.render(content);
});

  // aggregates all the files in css_glob
  // this is then used in css_styles.njk to create the main css file
  // later I need to create multiple css files based on directory structure
  eleventyConfig.addCollection('css_main', function(collection) {
    return css_glob
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
