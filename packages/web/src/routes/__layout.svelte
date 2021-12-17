<script context="module">
	import { fetchQuery } from '../utils/helpers'

	export async function load({ fetch }) {
		const settings = await fetchQuery({ fetch, dataJson: '/settings.json' })

		return {
			props: {
				settings,
			},
		}
	}
</script>

<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	export let settings

	const { navMenuHeader, navMenuFooter } = settings
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;600;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	</style>
</svelte:head>

<div class="min-h-screen bg-coolGray-100 text-coolGray-800">
	<div class="p-6 space-y-8">
		<Header items={navMenuHeader} />
		<main>
			<div class="container mx-auto space-y-16">
				<slot />
			</div>
		</main>
		<Footer items={navMenuFooter} />
	</div>
</div>
