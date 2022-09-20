<script>
	import { Navigation, Pagination } from 'swiper'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { imageUrl } from '../../../utils/helpers'

	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'

	export let slides = []
</script>

{#if slides.length}
	<Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }}>
		{#each slides as slide}
			{@const slideBg = `url(${imageUrl(slide.image).url()})`}
			<SwiperSlide>
				<div class="slide flex place-content-center items-center h-96 min-h-full" style:background-image={slideBg}>
					<span class="text-4xl font-bold text-primary-300">{slide.text}</span>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
{/if}

<style>
	.slide {
		background-size: cover;
		background-position: 50% 50%;
		background-blend-mode: multiply;
		@apply bg-primary-600;
	}

	:global(:root) {
		--swiper-theme-color: theme('colors.primary.500');
	}
</style>
