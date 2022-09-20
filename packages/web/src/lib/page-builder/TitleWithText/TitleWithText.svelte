<script>
	export let title
	export let text
	export let alignment
</script>

{#if title || text}
	<div class="max-w-3xl" class:right={alignment === 'right'} class:center={alignment === 'center'}>
		{#if title}
			<h2 class="text-2xl font-bold tracking-tight sm:text-4xl text-gray-900">
				{title}
			</h2>
		{/if}

		{#if text}
			<p class="mt-4 text-xl text-gray-600">
				{text}
			</p>
		{/if}
	</div>
{/if}

<style>
	.center {
		@apply text-center;
		@apply m-auto;
	}

	.right {
		@apply text-right;
		@apply my-0;
		@apply mr-0;
		@apply ml-auto;
	}
</style>
