import { useQuery } from "react-query"
import { listFetcher } from "../Api"
import PokemonListItem from "./PokemonListItem"

export default function PokemonList() {
  const { data, isLoading } = useQuery("pokemon-list", listFetcher(), {
    staleTime: 600_000,
  })

  return (
    <>
      {!isLoading &&
        data.results.map((e: any) => (
          <PokemonListItem key={e.name} name={e.name} {...e} />
        ))}
    </>
  )
}
