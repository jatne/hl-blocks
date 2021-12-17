<script>
	import MenuItems from './MenuItems.svelte'
	import Signet from './Signet.svelte'

	export let items = []
</script>

<header
	class="container flex items-center justify-between h-16 mx-auto px-4 rounded bg-white"
>
	<a href="/" aria-label="Back to homepage" class="p-2">
		<Signet pageName={true} />
	</a>
	{#if items.length}
		<ul class="items-stretch hidden space-x-3 md:flex">
			<MenuItems {items} />
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
