import { useQuery } from "react-query"
import { detailFetcher } from "../../Api"
import { PokemonListItem } from "./PokemonListItem"
import { PokemonListItemSkeleton } from "./PokemonListItemSkeleton"

export default function PokemonListItemWrapper({ name }: { name: string }) {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    detailFetcher(name),
    { staleTime: 600_000 }
  )

  return isLoading ? (
    <PokemonListItemSkeleton />
  ) : (
    <PokemonListItem data={data} />
  )
}
