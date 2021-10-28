<script>
	import { EmptySpace, Image, RichEditor } from '$lib/page-builder'

	export let blocks
</script>

{#each blocks as block}
	{#if block._type === 'emptySpace'}
		<EmptySpace size={block.value} />
	{:else if block._type === 'image'}
		<Image asset={block.asset} />
	{:else if block._type === 'richEditor'}
		<RichEditor content={block.content} />
	{/if}
{/each}
