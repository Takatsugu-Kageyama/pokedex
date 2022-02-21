import styles from "../styles/searchBox.module.scss";

const SearchBox = () => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="ポケモンをけんさく"
    />
  );
};
export default SearchBox;
