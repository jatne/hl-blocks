<script>
	export let size
</script>

<div class="emptySpace emptySpace--{size}" />

<style>
	.emptySpace {
		@apply w-full;
		@apply m-0;
		@apply block;
	}

	.emptySpace--large {
		@apply py-12;
	}

	.emptySpace--small {
		@apply py-6;
	}
</style>
