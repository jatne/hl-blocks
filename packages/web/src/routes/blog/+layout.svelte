<article>
	<header class="pt-6 xl:pb-6">
		<div class="space-y-1 text-center">
			<dl class="space-y-10">
				<div>
					<dt class="sr-only">Published on</dt>
					<dd
						class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
					>
						<time dateTime="123"> 123 </time>
					</dd>
				</div>
			</dl>
			<h1
				class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
			>
				Keko
			</h1>
		</div>
	</header>
	<div
		class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
		style="grid-template-rows: auto 1fr;"
	/>
	<div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
		<slot />
	</div>
</article>
