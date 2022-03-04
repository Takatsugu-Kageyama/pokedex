import PokedexMain from "../components/pokedexMain";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useAuth } from "../components/context/authContext";
import { useRouter } from "next/router";

const PokedexUser: NextPage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  //Redirect to user page if login information is available
  useEffect(() => {
    currentUser === null && router.push("/");
  }, [currentUser]);
  return (
    <>
      <h2>{`The current user is ${currentUser}`}</h2>
      <PokedexMain />
    </>
  );
};
export default PokedexUser;
