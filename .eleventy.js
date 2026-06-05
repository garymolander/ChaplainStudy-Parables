module.exports = function (eleventyConfig) {
  // Copy static assets (PDFs, admin folder, root files like favicon)
  eleventyConfig.addPassthroughCopy({ "src/pdfs": "/" });
  eleventyConfig.addPassthroughCopy("admin");

  // Custom collection: chapters sorted by chapter_number
  eleventyConfig.addCollection("chapters", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/chapters/*.md")
      .sort((a, b) => a.data.chapter_number - b.data.chapter_number);
  });

  // Filter to render simple markdown-ish text (paragraph splitting)
  eleventyConfig.addFilter("paragraphs", function (text) {
    if (!text) return "";
    return text
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p class="study-body">${p}</p>`)
      .join("\n");
  });

  // Filter: convert plain double-newline text to <p> for box bodies
  eleventyConfig.addFilter("boxBody", function (text) {
    if (!text) return "";
    return text
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p class="study-body">${p}</p>`)
      .join("\n");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
