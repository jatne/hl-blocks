import { gql, GraphQLClient } from 'graphql-request'

export async function get() {
  const endpoint = import.meta.env.VITE_SANITY_ENDPOINT
  const client = new GraphQLClient(endpoint, {
    headers: {}
  })

  try {
    const query = gql`
      query allPages {
        allPage {
          _id
          name
          contentRaw
          slug {
            current
          }
        }
      }
    `

    const { allPage } = await client.request(query)

    return {
      status: 200,
      body: {
        pagesGraphQL: allPage,
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