<script>
	export let portableText

	$: href = portableText.mark.href
</script>

<a {href}><slot /></a>
