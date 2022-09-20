import client from '$lib/client'
import { getFrontPage } from '../../utils/queries'

export async function GET() {
	try {
		const data = await client.fetch(getFrontPage)

		return new Response(JSON.stringify({ data }), {
			headers: {
				'content-type': 'application/json; charset=utf-8',
			},
		})
	} catch (err) {
		return new Response()
	}
}
