import { fetchQuery } from '../utils/helpers'

export async function load({ fetch }) {
	const {
		navMenuHeader,
		navMenuFooter
	} = await fetchQuery({ fetch, dataJson: '/settings.json' })

	return {
		navMenuHeader,
		navMenuFooter,
	}
}
