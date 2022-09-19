<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'

	export let data
</script>

<div class="space-y-6">
	<PageBuilder blocks={data.pageData?.content} />
</div>
