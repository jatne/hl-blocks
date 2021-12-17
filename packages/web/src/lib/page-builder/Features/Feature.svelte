<script>
	export let title = ''
	export let description = ''
</script>

{#if title}
	<div class="flex">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
			class="flex-shrink-0 w-6 h-6 text-cyan-600"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 13l4 4L19 7"
			/>
		</svg>
		<div class="ml-3">
			<dt class="text-lg font-medium">{title}</dt>
			{#if description}
				<dd class="mt-2 text-gray-600">{description}</dd>
			{/if}
		</div>
	</div>
{/if}
