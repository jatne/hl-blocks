<script>
	import { PortableText } from '@portabletext/svelte'
	export let content
</script>

<div class="prose max-w-none">
	<PortableText value={content} />
</div>
