import styles from "../styles/pokelist.module.scss";
import Pokecard from "./pokecard";
import { PokemonSchema } from "../util/pokemonSchema";

interface PokeListProps {
  searchedPokemons: PokemonSchema[];
  onPokemonClick: (inputValue: string) => void;
}

const Pokelist = ({ searchedPokemons, onPokemonClick }: PokeListProps) => {
  return (
    <div className={styles.pokelist}>
      {searchedPokemons.map((pokemon) => {
        return (
          pokemon.name && (
            <Pokecard
              onPokemonClick={onPokemonClick}
              key={pokemon.id}
              name={pokemon.name}
              spriteUrl={pokemon.sprites?.normal}
            />
          )
        );
      })}
    </div>
  );
};
export default Pokelist;
