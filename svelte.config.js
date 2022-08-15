import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        paths: { assets: "", base: "/tailoring-project" },
        adapter: adapter({
			pages: "docs",
            assets: "docs",
            fallback: 'index.html',
            precompress: false,
        })
    }
};

export default config;