import { fetchQuery } from '../utils/helpers'

export async function load({ fetch }) {
	const pageData = await fetchQuery({ fetch, dataJson: '/frontpage.json' })

	return {
		pageData,
	}
}
