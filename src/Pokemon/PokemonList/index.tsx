import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useInfiniteQuery } from "react-query"
import { Link } from "react-router-dom"
import { listFetcher } from "../../Api"
import { useStore } from "../../stores"
import PokemonListItem from "../PokemonListItem"
import styles from "./index.module.css"

function PokemonList({ filter }: any) {
  const { app } = useStore()

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "pokemon-list",
    listFetcher(),
    {
      staleTime: 600_000,
      getNextPageParam: (lastPage) => {
        if (lastPage.next !== null) {
          return lastPage.pageParam + 1
        }
      },
    }
  )

  // Remember scroll position
  // -----------------------------------
  useEffect(() => {
    window.scrollTo(0, app.scrollPositionY)
  }, [])

  const handlePokemonClick = () => {
    app.handleScrollPositionChange(window.scrollY)
  }
  // -----------------------------------

  return (
    <>
      {!isLoading &&
        data?.pages.map((page) =>
          page.results.filter(filter).map((e: any) => (
            <Link
              to={`/details/${e.name}`}
              className={styles["pokemon-link"]}
              key={e.name}
              onClick={handlePokemonClick}
            >
              <PokemonListItem name={e.name} {...e} />
            </Link>
          ))
        )}

      {hasNextPage && (
        <button
          className={styles["load-more-btn"]}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </>
  )
}

export default observer(PokemonList)
