import Head from "next/head";
import Login from "../components/login";
import AuthContextProvider, {
  useAuth,
} from "../components/context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  //Redirect to user page if login information is available
  useEffect(() => {
    currentUser && router.push("/pokedexUser");
  }, [currentUser]);
  return <Login />;
};

export default Home;
