import client from '$lib/client'
import { getPageBySlug } from '../utils/queries'

export async function get(req) {
  try {
    const slug = req.params.slug
    const data = await client.fetch(getPageBySlug, { slug })

    return {
      status: 200,
      body: {
        data,
      },
    }
  } catch (err) {
		return {
			status: 500,
			body: {
				error: err,
			},
		}
  }
}