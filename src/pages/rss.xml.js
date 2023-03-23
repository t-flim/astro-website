import rss, { pagesGlobToRssItems } from "@astra/rss"

export async function get() {

    return rss({
        title: "Astro Learner | Blog",
        description: "My journey learning Astro",
        site: "https://fulim-astro-website.netlify.app/",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: "<language>en-us</language>",
    })
}