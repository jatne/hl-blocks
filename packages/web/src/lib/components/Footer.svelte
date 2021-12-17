<script>
	import MenuItems from './MenuItems.svelte'
	import Signet from './Signet.svelte'

	export let items = []
</script>

<footer>
	<div class="px-4 py-8 bg-white text-gray-600 container mx-auto grid gap-y-14">
		<div class="flex justify-center">
			<ul class="flex flex-wrap space-x-4 sm:space-x-8">
				<MenuItems {items} />
			</ul>
		</div>
		<div>
			<div class="flex justify-center">
				<Signet pageName={true} />
			</div>
			<div class="pt-4">
				<p class="text-center">
					Svelte Kit / Sanity / Tailwind<br /><span class="text-gray-400"
						>2021</span
					>
				</p>
			</div>
		</div>

		<!-- <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
		</div>
		<div>
		</div> -->
	</div>
</footer>
