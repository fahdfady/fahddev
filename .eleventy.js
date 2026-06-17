module.exports = function (eleventyConfig) {
    const externalBlogs = require("./src/_data/externalBlogs.json");

    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("CNAME");

    // Date formatting filter
    eleventyConfig.addFilter("dateFormat", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    // Year filter
    eleventyConfig.addFilter("year", () => new Date().getFullYear());

    // Blog posts collection
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addCollection("allBlogPosts", function (collectionApi) {
        const localPosts = collectionApi.getFilteredByGlob("src/blog/*.md").map((post) => ({
            url: post.url,
            data: {
                ...post.data,
                external: false
            }
        }));

        const externalPosts = externalBlogs.map((post, index) => ({
            url: post.url,
            data: {
                ...post,
                external: true,
                tags: post.tags || [],
                sortOrder: post.sortOrder ?? index
            }
        }));

        return [...localPosts, ...externalPosts].sort((a, b) => {
            const dateA = a.data.date ? new Date(a.data.date) : null;
            const dateB = b.data.date ? new Date(b.data.date) : null;

            if (dateA && dateB) {
                return dateB - dateA;
            }

            if (dateA) {
                return -1;
            }

            if (dateB) {
                return 1;
            }

            return a.data.sortOrder - b.data.sortOrder;
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
