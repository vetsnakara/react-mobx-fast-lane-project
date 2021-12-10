import { Link, useParams } from "react-router-dom"
import styles from "./PokemonDetails.module.css"
import PokemonListItem from "./PokemonListItem"

export default function PokemonDetails() {
  const { name } = useParams<{ name: string }>()

  return (
    <>
      <Link to="/" className={styles["nav-bar"]}>
        &lt; Back to the Pokedex
      </Link>
      <PokemonListItem name={name} />
    </>
  )
}
