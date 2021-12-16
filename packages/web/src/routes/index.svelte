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

<PageBuilder blocks={frontPageData.content} />
