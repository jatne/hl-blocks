import client from '$lib/client'
import imageUrlBuilder from '@sanity/image-url'

export async function fetchQuery({fetch, dataJson }) {
  try {
    const res = await fetch(dataJson)

    if (res.ok) {
      const { data } = await res.json()

      return data
    }
  } catch (err) {
    console.error(err)
    return []
  }
}

const builder = imageUrlBuilder(client)

export function imageUrl(source) {
  return builder.image(source)
}