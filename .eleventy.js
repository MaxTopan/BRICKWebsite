module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPassthroughCopy("_src/syle.css");
    eleventyConfig.addPassthroughCopy("_src/*.css");
    eleventyConfig.addPassthroughCopy("_src/index.html");
    eleventyConfig.addPassthroughCopy("_src/assets");
    eleventyConfig.addFilter("toBrickCase", function (value) {
        if (!value) return "";
        return `[${value.toUpperCase()}]`;
    })

    return {
        dir: {
            input: "_src",
            output: "_public",
        },
    };
};