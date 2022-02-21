import styles from "../styles/pokedexNonUser.module.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import PokeSearchResult from "../components/pokeSearchResult";
import SearchBox from "../components/searchBox";
import Pokelist from "../components/pokelist";

const PokedexNonUser: NextPage = () => {
  return (
    <>
      <Head>
        <title>なつかしいポケモン図鑑</title>
      </Head>
      <div className={styles.pokedex_container}>
        <div className={styles.pokelist_container}>
          <SearchBox />
          <Pokelist />
        </div>
        <div className={styles.pokesearchresult_container}>
          <PokeSearchResult />
        </div>
      </div>
    </>
  );
};
export default PokedexNonUser;
