<script>
	import { imageUrl } from '../../../../utils/helpers'

	export let image

	const getHeroImage = imageUrl(image).url()
</script>

<div class="w-full h-96 bg-cover bg-center" style="background-image: url('{getHeroImage}');" />
