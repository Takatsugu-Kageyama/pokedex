import styles from "../styles/pokecard.module.scss";

interface PokeCardProps {
  spriteUrl?: string;
  name: string;
  onPokemonClick: (inputValue: string) => void;
}

const Pokecard = ({ spriteUrl, name, onPokemonClick }: PokeCardProps) => {
  return (
    <div onClick={() => onPokemonClick(name)} className={styles.pokecard}>
      {/*ToDo -add image*/}
      <img className={styles.pokemon_sprite} src={spriteUrl} />
      <p>{name}</p>
    </div>
  );
};
export default Pokecard;
