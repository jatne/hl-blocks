<script context="module">
	import client from '$lib/client'
</script>

<script>
	import imageUrlBuilder from '@sanity/image-url'
	export let asset

	function urlFor(source) {
		return imageUrlBuilder(client).image(source)
	}
</script>

<div class="image"><img src={urlFor(asset)} alt /></div>
