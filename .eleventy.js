module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPassthroughCopy("_src/syle.css")

    return {
        dir: {
            input: "_src",
            output: "_public",
        },
    };
};