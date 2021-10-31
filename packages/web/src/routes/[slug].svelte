<script context="module">
	import { fetchQuery } from '../utils/helpers'
	export const prerender = true

	export async function load({ fetch, page: { params } }) {
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
	export let pageData

	const { name } = pageData
</script>

<article>
	<h1>{name}</h1>
</article>
