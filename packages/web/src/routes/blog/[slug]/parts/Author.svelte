<script>
	import { imageUrl } from '../../../../utils/helpers'

	export let author
</script>

<div class="flex items-center mr-3 text-sm text-gray-900 dark:text-white">
	{#if author.avatar}
		<img class="mr-4 w-16 h-16 rounded-full" src={imageUrl(author.avatar).url()} alt={author.name} />
	{:else}
		<svg viewBox="0 0 128 128" role="img" aria-label="avatar" class="mr-4 w-16 h-16 rounded-full w-16 h-16"
			><path
				fill="currentColor"
				d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
			/><path
				fill="currentColor"
				d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
			/></svg
		>
	{/if}

	<div>
		<a href="/author/{author.slug.current}" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
			>{author.name}</a
		>
	</div>
</div>
