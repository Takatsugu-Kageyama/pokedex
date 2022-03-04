import styles from "../styles/mypageImage.module.scss";
import { useAuth } from "./context/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signOut } from "@firebase/auth/dist/node-esm";
import { auth, firebase } from "../util/firebase";
import { doc, getDoc, getFirestore } from "@firebase/firestore";

const MyPageImage = () => {
  const user = auth.currentUser;
  const userId = user?.uid;
  const [userInfo, setUserInfo] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const db = getFirestore(firebase);
      const userInfoRef = doc(db, "userData", `${userId}`);
      const user = await getDoc(userInfoRef);
      const userDetail = user.data();
      setUserInfo(userDetail);
    })();
  }, []);
  return (
    <>
      <div className={styles.image_container}>
        {userInfo.gender === "おんな" ? (
          <img src="/images/girlchara.png" alt="" />
        ) : (
          <img src="/images/menchara.png" alt="" />
        )}
      </div>
    </>
  );
};
export default MyPageImage;
