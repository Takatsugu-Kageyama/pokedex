import { NextPage } from "next";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.scss";
import React from "react";
import AuthContextProvider from "./context/authContext";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <div className={styles.overall}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </AuthContextProvider>
    </>
  );
};
export default Layout;
