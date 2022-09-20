import { fetchQuery } from '../../../utils/helpers'
export const prerender = true

export async function load({ fetch, params }) {
	const postData = await fetchQuery({
		fetch,
		dataJson: `/blog/${params.slug}.json`,
	})

	return {
		postData,
	}
}
