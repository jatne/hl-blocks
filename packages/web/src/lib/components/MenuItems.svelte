<script>
	import { page } from '$app/stores'

	export let items = []
</script>

{#each items as { url, external, label }}
	<li class="flex">
		{#if external}
			<a
				href={url}
				target="_blank"
				class="flex items-center px-4 -mb-1 border-b-2 border-transparent"
			>
				{label}
			</a>
		{:else}
			<a
				sveltekit:prefetch
				href={url}
				class="flex items-center px-4 -mb-1 border-b-2 border-transparent"
				class:active={$page.path == url}
			>
				{label}
			</a>
		{/if}
	</li>
{/each}

<style>
	.active {
		@apply underline;
		@apply decoration-2;
		@apply decoration-cyan-500;
	}
</style>
