import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId:  import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_PROJECT_DATASET,
  apiVersion: '2021-03-25',
  token: import.meta.env.VITE_SANITY_PROJECT_TOKEN,
  useCdn: false
})

export default client