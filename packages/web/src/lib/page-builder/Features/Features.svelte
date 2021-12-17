<script>
	import Feature from './Feature.svelte'
	export let content
</script>

{#if content.length > 0}
	<dl class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm-gap-8">
		{#each content as { title, description }, i}
			<Feature {title} {description} />
		{/each}
	</dl>
{/if}
