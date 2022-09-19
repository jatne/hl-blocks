<script>
	import PostBox from './PostBox.svelte'

	export let isActive = false
	export let posts = []
</script>

{#if isActive}
	<div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{#each posts as post}
			<PostBox {post} />
		{/each}
	</div>
{/if}
