<script>
	export let pageName = false
</script>

<div class="grid grid-flow-col gap-x-2 items-center">
	<svg
		width="28"
		height="32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="h-8"
	>
		<path
			class="stroke-cyan-500"
			stroke-width="2"
			d="M1 1h26v12H1zM13 27h6v4h-6zM23 27h4v4h-4zM1 17h8v14H1zM13 17h14v6H13z"
		/>
	</svg>
	{#if pageName}
		<span class="font-bold">hl blocks</span>
	{/if}
</div>
