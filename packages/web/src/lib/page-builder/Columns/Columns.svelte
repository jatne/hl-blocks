<script>
	import PageBuilder from '$lib/page-builder/PageBuilder.svelte'
	export let style
	export let content

	const [colsNumber, colsStyle] = style.split('_')

	const columns = Object.values(content).filter((col) => col)
</script>

<div class={`wrapper wrapper--${colsNumber} wrapper--${colsStyle}`}>
	{#each columns as column}
		<div class="column">
			<PageBuilder blocks={column} />
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: var(--columns, 1fr);
		gap: 1.5em;
	}

	.wrapper--2 {
		--columns: 1fr 1fr;
	}

	.wrapper--3 {
		--columns: repeat(3, 1fr);
	}

	.wrapper--40-60 {
		--columns: 0.4fr 0.6fr;
	}
</style>
