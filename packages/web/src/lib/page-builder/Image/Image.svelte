<script>
	import { imageUrl } from '../../../utils/helpers'
	export let asset

	const { height, width } = asset.metadata.dimensions
</script>

<div class="image">
	<img src={imageUrl(asset).url()} alt="" {width} {height} />
</div>
