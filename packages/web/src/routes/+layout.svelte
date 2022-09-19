<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	export let data

	const { navMenuHeader, navMenuFooter } = data
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;600;800&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	</style>
</svelte:head>

<div class="min-h-screen bg-gray-100 text-gray-800 px-6 py-2">
	<Header items={navMenuHeader} />
	<main class="py-6">
		<div class="container mx-auto">
			<slot />
		</div>
	</main>
	<Footer items={navMenuFooter} />
</div>
