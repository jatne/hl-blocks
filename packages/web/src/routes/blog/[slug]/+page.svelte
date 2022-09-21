<script>
	import RichEditor from '$lib/page-builder/RichEditor/RichEditor.svelte'
	import Author from './parts/Author.svelte'
	import Hero from './parts/Hero.svelte'

	export let data
</script>

<article class="space-y-5">
	{#if data.postData.imageFeatured._id}
		<Hero image={data.postData.imageFeatured} />
	{/if}
	<div class="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg pb-6 px-3">
		<header class="pt-4 mb-4 lg:mb-6 not-format text-center">
			<h1 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
				{data.postData.name}
			</h1>
			<p class="text-base font-light text-gray-500 dark:text-gray-400">
				<time pubdate datetime={data.postData.publishDate} title={data.postData.publishDate}
					>{new Date(data.postData.publishDate).toDateString()}</time
				>
			</p>
		</header>
		<div class="mb-8">
			{#if data.postData.content}
				<RichEditor content={data.postData.content} />
			{/if}
		</div>
		<footer class="flex items-center mb-6 not-italic">
			<div class="space-y-5">
				{#each data.postData.author as author}
					<Author {author} />
				{/each}
			</div>
		</footer>
	</div>
</article>
