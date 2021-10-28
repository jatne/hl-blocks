<script>
	import PortableText from '@portabletext/svelte'
	export let content
</script>

<PortableText blocks={content} />
