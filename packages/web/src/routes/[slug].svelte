<script context="module">
	import { fetchQuery } from '../utils/helpers'
	export const prerender = true

	export async function load({ fetch, params }) {
		const pageData = await fetchQuery({
			fetch,
			dataJson: `/${params.slug}.json`,
		})

		return {
			props: {
				pageData,
			},
		}
	}
</script>

<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'

	export let pageData
</script>

<PageBuilder blocks={pageData.content} />
