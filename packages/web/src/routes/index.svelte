<script context="module">
	import { getPagesGraphQL, getPagesGROQ } from '../utils/helpers'
	import client from '$lib/client'

	export const prerender = true

	export async function load({ fetch }) {
		const pagesGraphQL = await getPagesGraphQL(fetch)
		const pagesGROQ = await getPagesGROQ(fetch)

		return {
			props: {
				pagesGraphQL,
				pagesGROQ,
			},
		}
	}
</script>

<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'
	import imageUrlBuilder from '@sanity/image-url'
	export let pagesGraphQL
	export let pagesGROQ

	let showDebug = false

	const toggleDebug = () => (showDebug = !showDebug)

	function urlFor(source) {
		return imageUrlBuilder(client).image(source)
	}
</script>

<div class="container">
	<div>
		<h1>
			All pages - GRAPHQL <button on:click={toggleDebug}>toggle debug</button>
		</h1>

		{#each pagesGraphQL as page}
			<hr />
			<h2>{page.name} <small>({page.slug.current})</small></h2>
			<PageBuilder blocks={page.contentRaw} />
			<hr />
		{/each}

		{#if showDebug}
			<div class="debug">
				<span on:click={toggleDebug}>X</span>
				<pre>{JSON.stringify(pagesGraphQL, null, 2)}</pre>
			</div>
		{/if}
	</div>
	<div>
		<h1>All pages - GROQ</h1>

		{#each pagesGROQ as page}
			<hr />
			<h2>{page.name} <small>({page.slug.current})</small></h2>
			<PageBuilder blocks={page.content} />
			{#if page.imageFeatured}
				<img src={urlFor(page.imageFeatured)} alt />
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

	.debug {
		position: fixed;
		right: 10px;
		top: 10px;
		max-width: 600px;
		max-height: 500px;
		overflow: auto;
	}

	.debug span {
		position: fixed;
		font-weight: 600;
		cursor: pointer;
	}
	.debug pre {
		background: #ddd;
		padding: 1rem;
		border-radius: 6px;
		border: 1px solid rgb(138, 138, 138);
	}
</style>
