<script>
	import { PortableText } from '@portabletext/svelte'
	export let content
</script>

<div class="prose">
	<PortableText value={content} />
</div>
