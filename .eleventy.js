module.exports = function (eleventyConfig) {
    //add css support
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addWatchTarget("./src/js");
    eleventyConfig.addWatchTarget("./src/img");
    eleventyConfig.addWatchTarget("./src/fonts");
    return {
        dir: {
            input: "src",
        },
    };
};
