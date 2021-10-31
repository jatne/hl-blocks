import client from '$lib/client'
import { getAllPages } from '$lib/queries'

export async function get() {
  try {
    const data = await client.fetch(getAllPages)

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