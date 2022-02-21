import styles from "../styles/searchBox.module.scss";

interface SearchBoxProps {
  onInputChange: (inputValue: string) => void;
}

const SearchBox = ({ onInputChange }: SearchBoxProps) => {
  return (
    <input
      onChange={(e) => {
        onInputChange(e.target.value);
      }}
      className={styles.search}
      type="search"
      placeholder="ポケモンをけんさく"
    />
  );
};
export default SearchBox;
