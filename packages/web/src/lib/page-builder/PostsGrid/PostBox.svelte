<script>
	import { imageUrl } from '../../../utils/helpers'
	import Category from './parts/Category.svelte'
	import { toPlainText } from '@portabletext/svelte'

	export let post = {}

	const prepareExcerpt = (text) => `${text.split(' ').splice(0, 30).join(' ')}...`
</script>

<article class="bg-white">
	<a data-sveltekit-prefetch href="/blog/{post.slug.current}" aria-label={post.name}>
		<img
			src={imageUrl(post.imageFeatured).url()}
			class="object-cover w-full h-56 mb-5 bg-center rounded"
			alt={post.name}
			loading="lazy"
		/>
	</a>
	<div class="px-3">
		<p class="mb-3 text-sm font-normal text-gray-500">
			<Category category={post.category} />
			{post.publishDate ? `• ${new Date(post.publishDate).toDateString()}` : ''}
		</p>
		<h2 class="mb-2 text-lg font-semibold text-gray-900">
			<a
				data-sveltekit-prefetch
				href="/blog/{post.slug.current}"
				aria-label={post.name}
				class="text-gray-900 hover:text-purple-700">{post.name}</a
			>
		</h2>
		<p class="mb-3 text-sm font-normal text-gray-500">
			{prepareExcerpt(post.excerpt || toPlainText(post.content))}
		</p>
	</div>
</article>
