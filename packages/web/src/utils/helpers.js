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