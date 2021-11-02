<script context="module">
	import { fetchQuery } from '../utils/helpers'

	export const prerender = true

	export async function load({ fetch }) {
		const frontPageData = await fetchQuery({ fetch, dataJson: '/index.json' })
		return {
			props: {
				frontPageData,
			},
		}
	}
</script>

<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'

	export let frontPageData
</script>

<div class="container">
	<div>
		{frontPageData.name}
		<PageBuilder blocks={frontPageData.content} />
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
