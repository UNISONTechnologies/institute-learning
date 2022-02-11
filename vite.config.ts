import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import htmlConfig from "vite-plugin-html-config";

const description = "Institute Learning is an open learning platform";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        htmlConfig({
            metas: [
                {
                    name: "keywords",
                    content:
                        "education learning unisontech unisontechnologies",
                },
                {
                    name: "description",
                    content: description,
                },
                { name: "robots", content: "index, follow" },

                // Open Graph
                { property: "og:title", content: "Institute Learning" },
                {
                    property: "og:image",
                    content: "https://institute.unisontech.org/favicon.png",
                },
                { property: "og:type", content: "website" },
                { property: "og:description", content: description },

                // Twitter Cards
                { name: "twitter:card", content: "summary" },
                { name: "twitter:site", content: "@hkamran80" },
                { name: "twitter:creator", content: "@hkamran80" },
                { name: "twitter:title", content: "Institute Learning" },
                { name: "twitter:description", content: description },
                {
                    name: "twitter:image",
                    content: "https://institute.unisontech.org/favicon.png",
                },
                {
                    name: "twitter:image:alt",
                    content: "The Institute Learning logo",
                },
            ],
        }),
        vue(),
    ],
});
