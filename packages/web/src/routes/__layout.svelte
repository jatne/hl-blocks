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
	import Nav from '$lib/components/Nav.svelte'

	export let settings

	console.log(settings)
</script>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg-px-8">
	<header>
		<Nav />
	</header>
	<main class="mx-auto max-w-3xl">
		<slot />
	</main>
</div>
