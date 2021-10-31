<script context="module">
	import { fetchQuery } from '../utils/helpers'

	export const prerender = true

	export async function load({ fetch }) {
		const allPages = await fetchQuery({ fetch, dataJson: '/pages.json' })

		return {
			props: {
				allPages,
			},
		}
	}
</script>

<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'

	export let allPages
</script>

<div class="container">
	<div>
		<h1>All pages - GROQ</h1>

		{#each allPages as page}
			<hr />
			<h2>{page.name} <small>({page.slug})</small></h2>
			<PageBuilder blocks={page.content} />
			{#if page.imageFeatured}
				<img
					src={page.imageFeatured.url}
					alt={page.imageFeatured.originalFilename}
				/>
			{/if}
			<hr />
		{/each}
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10em;
		padding: 2em;
	}
</style>
