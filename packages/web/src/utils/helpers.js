export async function getPagesGraphQL(fetcher) {
  const res = await fetcher('/pages-graphql.json')

  if (res.ok) {
    const { pagesGraphQL } = await res.json()

    return pagesGraphQL
  }
}

export async function getPagesGROQ(fetcher) {
  const res = await fetcher('/pages-groq.json')

  if (res.ok) {
    const { pagesGROQ } = await res.json()

    return pagesGROQ
  }
}