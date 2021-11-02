<script>
	export let items = []
</script>

{#if items.length}
	<nav>
		<ul>
			{#each items as { url, external, label }}
				<li>
					<a
						sveltekit:prefetch
						href={url}
						target={external ? '_blank' : '_self'}
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
