import styles from "../styles/pokeSearchResult.module.scss";
import { PokemonSchema } from "../util/pokemonSchema";

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  const { name, id, height, weight, sprites } = selectedPokemon || {};
  return (
    <div className={styles.poke_result_card}>
      {selectedPokemon ? (
        <div>
          {/*Add the image here*/}
          <img
            className={styles.pokemon_animated_sprite}
            src={sprites?.animated || sprites?.normal}
            alt=""
          />
          <p>なまえ：{name}</p>
          <p>ばんごう：{id}</p>
          <p>たかさ：{height}</p>
          <p>おもさ：{weight}</p>
        </div>
      ) : (
        <h2>ポケモンずかんへようこそ</h2>
      )}
    </div>
  );
};
export default PokeSearchResult;
