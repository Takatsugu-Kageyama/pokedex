import { useAuth } from "../components/context/authContext";
import PokedexSub from "../components/pokedexSub";

const PokedexNonUser = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <h2>{`The current user is ${currentUser}`}</h2>
      <PokedexSub />
    </>
  );
};
export default PokedexNonUser;
