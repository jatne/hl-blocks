import client from '$lib/client'
import { getFrontPage } from '../utils/queries'

export async function get() {
  try {
    const data = await client.fetch(getFrontPage)

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