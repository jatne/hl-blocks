<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'

	export let data
</script>

<PageBuilder blocks={data.pageData?.content} />
