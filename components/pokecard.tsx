import styles from "../styles/pokecard.module.scss";

const Pokecard = (props: any) => {
  return (
    <div className={styles.pokecard}>
      {/*ToDo -add image*/}
      <p>{props.name}</p>
    </div>
  );
};
export default Pokecard;
