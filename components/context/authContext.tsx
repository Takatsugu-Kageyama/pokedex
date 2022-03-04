import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import firebase from "firebase/compat";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";

const AuthContext = createContext({
  currentUser: null,
});
export const useAuth = () => useContext(AuthContext);
const AuthContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user.uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
