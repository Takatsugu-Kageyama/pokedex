import styles from "../styles/pokelist.module.scss";
import Pokecard from "./pokecard";

const Pokelist = () => {
  return (
    <div className={styles.pokelist}>
      <Pokecard name="ピカチュウ" />
      <Pokecard name="フシギダネ" />
      <Pokecard name="フシギソウ" />
      <Pokecard name="フシギバナ" />
      <Pokecard name="ヒトカゲ" />
    </div>
  );
};
export default Pokelist;
