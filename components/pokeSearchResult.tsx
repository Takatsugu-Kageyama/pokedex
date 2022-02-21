import styles from "../styles/pokeSearchResult.module.scss";

const PokeSearchResult = () => {
  const selectPokemon = false;
  return (
    <div className={styles.poke_result_card}>
      {selectPokemon ? (
        <div>
          {/*Add the image here*/}
          <p>なまえ：ピカチュウ</p>
          <p>ばんごう：</p>
          <p>たかさ：</p>
          <p>おおきさ：</p>
        </div>
      ) : (
        <h2>ポケモンずかんへようこそ</h2>
      )}
    </div>
  );
};
export default PokeSearchResult;
