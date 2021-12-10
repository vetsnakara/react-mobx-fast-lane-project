export const BASE_URL = "https://pokeapi.co/api/v2"

export const detailFetcher = (name: string) => async () => {
  const details = await fetch(BASE_URL + "/pokemon/" + name).then((r) =>
    r.json()
  )
  const species = await fetch(details.species.url).then((r) => r.json())
  return { ...details, names: species.names }
}

export const listFetcher =
  () =>
  async ({ pageParam = 0 }) => {
    return await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + pageParam * 100
    )
      .then((r) => r.json())
      .then((res) => ({ ...res, pageParam }))
  }
