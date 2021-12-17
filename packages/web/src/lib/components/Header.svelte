<script>
	import { page } from '$app/stores'

	export let items = []
</script>

<header
	class="container flex items-center justify-between h-16 mx-auto px-4 rounded bg-gray-100"
>
	<a
		href="/"
		aria-label="Back to homepage"
		class="grid grid-flow-col gap-x-2 items-center p-2"
	>
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
		<span class="font-bold">hl blocks</span>
	</a>
	{#if items.length}
		<ul class="items-stretch hidden space-x-3 md:flex">
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
		</ul>
	{/if}

	<button class="flex justify-end p-4 md:hidden">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</header>

<style>
	.active {
		@apply underline;
		@apply decoration-2;
		@apply decoration-cyan-500;
	}
</style>
