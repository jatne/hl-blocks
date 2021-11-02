import client from '$lib/client'
import { getMenus } from '../utils/queries'

export async function get() {
  try {
    const data = await client.fetch(getMenus)

    console.log(data)

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