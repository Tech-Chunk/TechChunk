import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
  extensions: ['.md'],
};

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore specific routes causing 404 errors
        if (path === '/second-post') {
          return {
            statusCode: 200, // Set a different status code if desired
            html: '<p>Custom content for the second post 404 page.</p>', // Provide custom HTML content
          };
        }

        // For other routes, fail the build and throw an error
        throw new Error(message);
      },
    },
  },
};

export default config;
