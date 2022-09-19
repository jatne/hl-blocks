import { fetchQuery } from '../../utils/helpers'
export const prerender = true

export async function load({ fetch, params }) {
	const pageData = await fetchQuery({
		fetch,
		dataJson: `/${params.slug}.json`,
	})

	return {
		pageData,
	}
}
