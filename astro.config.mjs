// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Notes',
			social: {
				github: 'https://github.com/yeha98555',
			},
			sidebar: [
				{
					label: 'Leetcode',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Neetcode',
							autogenerate: { directory: 'leetcode/neetcode' },
						},
						{
							label: 'Pandas',
							autogenerate: { directory: 'leetcode/pandas' },
						},
						{
							label: 'SQL',
							autogenerate: { directory: 'leetcode/sql' },
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
