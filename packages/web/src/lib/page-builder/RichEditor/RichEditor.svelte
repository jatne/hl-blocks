<script>
	import { PortableText } from '@portabletext/svelte'
	import LinkComponent from './LinkComponent.svelte'
	export let content
</script>

<div class="prose">
	<PortableText
		blocks={content}
		serializers={{
			marks: {
				link: LinkComponent,
			},
		}}
	/>
</div>
