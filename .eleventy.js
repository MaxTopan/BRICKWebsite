module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPassthroughCopy("src/*.css");
    eleventyConfig.addPassthroughCopy("src/*.js");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addFilter("toBrickCase", function (value) {
        if (!value) return "";
        return `[${value.toUpperCase()}]`;
    })

    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};