<script>
	export let items = []
</script>

{#if items.length}
	<nav>
		<ul>
			{#each items as { url, external, label }}
				<li>
					{#if external}
						<a href={url} target="_blank">{label}</a>
					{:else}
						<a sveltekit:prefetch href={url}>{label}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}
