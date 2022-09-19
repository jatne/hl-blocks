<script>
	export let category = []
</script>

{#if category.length}
	{#each category as { name, slug }}
		<a
			data-sveltekit-prefetch
			href="/blog/category/{slug.current}"
			class="font-medium text-gray-900 hover:text-purple-700"
		>
			{name}
		</a>
	{/each}
{:else}
	<span>No category</span>
{/if}
