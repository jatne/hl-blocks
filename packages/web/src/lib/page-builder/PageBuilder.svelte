<script>
	import {
		EmptySpace,
		Image,
		RichEditor,
		Features,
		TitleWithText,
	} from '$lib/page-builder'

	export let blocks = false

	console.log(blocks)
</script>

{#if blocks}
	{#each blocks as block}
		<!-- <section class="py-2"> -->
		{#if block._type === 'emptySpace'}
			<EmptySpace size={block.value} />
		{:else if block._type === 'image'}
			<Image asset={block.asset} />
		{:else if block._type === 'richEditor'}
			<RichEditor content={block.content} />
		{:else if block._type === 'featureBox'}
			<Features content={block.features} />
		{:else if block._type === 'titleWithText'}
			<TitleWithText
				title={block.title}
				text={block.text}
				alignment={block.alignment}
			/>
		{:else if block._type === 'slice'}
			<svelte:self blocks={block.content} />
		{/if}
		<!-- </section> -->
	{/each}
{/if}
