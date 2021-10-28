import groq from 'groq'
import client from '$lib/client'


export async function get() {

  try {
    const query = groq`
      *[_type == 'page']{name, slug, content, imageFeatured}
    `

    const  allPage  =  await client.fetch(query)

    return {
      status: 200,
      body: {
        pagesGROQ: allPage,
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