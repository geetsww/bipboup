const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
require('dotenv').config()
const MarkdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addFilter("log", function(value) { console.log(" --- LOG:",value) });
  eleventyConfig.addFilter("getImageUrl", function(value){
    return process.env.API + "/assets/" + value
  })
  eleventyConfig.addFilter('parseDateToFrench', function(value){
      const date = new Date(value)
      return date.toLocaleDateString('fr', {day:"2-digit",month:'long', year:'numeric'})
  })

  eleventyConfig.addWatchTarget("public/**/*");
  
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("markdown", function(rawString) {
    return mdRender.render(rawString);
  });

};