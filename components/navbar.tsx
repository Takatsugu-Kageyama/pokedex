import styles from "../styles/navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_container}>
        <div className={styles.main_title}>
          <p>
            <Link href="/">なつかしいポケモンずかん</Link>
          </p>
        </div>
        <div className={styles.nav_menu}>
          <ul className={styles.ul}>
            <li>
              <Link href="/">マイページ</Link>
            </li>
            <li>
              <Link href="/">人気のポケモン</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
