import { NextPage } from "next";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.scss";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <div className={styles.overall}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
