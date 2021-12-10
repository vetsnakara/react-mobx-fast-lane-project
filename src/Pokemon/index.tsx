import { observer } from "mobx-react-lite"
import { ChangeEvent } from "react"
import { useStore } from "../stores"
import styles from "./index.module.css"
import PokemonList from "./PokemonList"

function Pokemon() {
  const { app } = useStore()

  const filterPokemon = (e: any) => {
    if (!app.searchQuery.trim()) {
      return true
    }

    return new RegExp(app.searchQuery, "i").test(e.name)
  }

  return (
    <>
      <input
        placeholder="Enter the name of a Pokemon"
        className={styles.input}
        onChange={handleChangeInput}
      />
      <PokemonList filter={filterPokemon} />
    </>
  )

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    app.handleSearchQueryChange(e.target.value)
  }
}

export default observer(Pokemon)
