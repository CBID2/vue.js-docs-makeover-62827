// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "My Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
				},
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						{
							label: "Quickstart",
							slug: "guides/quickstart",
						},
						{
							label: "Elements",
							items: [
								{
									label: "Creating an Application",
									slug: "guides/elements/creating-an-application",
								},
								// Add more nested items here if needed
							],
						},
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
