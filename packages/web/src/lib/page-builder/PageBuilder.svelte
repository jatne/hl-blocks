<script>
	import {
		EmptySpace,
		Image,
		RichEditor,
		Features,
		TitleWithText,
		Columns,
		Slider,
	} from '$lib/page-builder'

	export let blocks = false

	console.log(blocks)
</script>

{#if blocks}
	{#each blocks as block}
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
		{:else if block._type === 'columns'}
			<Columns style={block.columnNumber} content={block.content} />
		{:else if block._type === 'slider'}
			<Slider slides={block.slides} />
		{/if}
	{/each}
{/if}
