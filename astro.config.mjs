// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Vue.js clone",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/vuejs/",
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.com/invite/vue",
				},
				{
					icon: "x.com",
					// Using "x(twitter)" to avoid confusion with the old Twitter branding
					// and to reflect the current branding as of October 2023.
					// Note: The icon name is still "x" in Starlight, but the label reflects the change.
					label: "x.com",
					href: "https://x.com/vuejs",
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
								{
									label: "Template Syntax",
									slug: "guides/elements/template-syntax",
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
