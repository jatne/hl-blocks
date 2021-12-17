<script>
	import Feature from './Feature.svelte'
	export let content
</script>

{#if content.length > 0}
	<dl
		class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8r"
	>
		{#each content as { title, description }, i}
			<Feature {title} {description} />
		{/each}
	</dl>
{/if}
