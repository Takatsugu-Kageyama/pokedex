import styles from "../styles/pokedex.module.scss";
import SearchBox from "./searchBox";
import Pokelist from "./pokelist";
import PokeSearchResult from "./pokeSearchResult";
import { PokemonSchema } from "../util/pokemonSchema";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  onInputChange: (inputValue: string) => void;
  selectedPokemon: PokemonSchema | undefined;
  onPokemonClick: (inputValue: string) => void;
}

const Pokedex = ({
  selectedPokemon,
  onInputChange,
  searchedPokemons,
  onPokemonClick,
}: PokedexProps) => {
  return (
    <div className={styles.pokedex_container}>
      <div className={styles.pokelist_container}>
        <SearchBox onInputChange={onInputChange} />
        <Pokelist
          onPokemonClick={onPokemonClick}
          searchedPokemons={searchedPokemons}
        />
      </div>
      <div className={styles.pokesearchresult_container}>
        <PokeSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};
export default Pokedex;
