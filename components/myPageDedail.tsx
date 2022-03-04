import styles from "../styles/mypageDetail.module.scss";
import { useAuth } from "./context/authContext";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { firebase } from "../util/firebase";
import { useEffect, useState } from "react";

const MyPageDedail = () => {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const db = getFirestore(firebase);
      const userInfoRef = doc(db, "userData", `${currentUser}`);
      const user = await getDoc(userInfoRef);
      const userDetail = user.data();
      setUserInfo(userDetail);
    })();
  }, []);

  return (
    <div className={styles.detail_container}>
      <dl className={styles.d_list}>
        <dt>なまえ</dt>
        <dd>{userInfo.name}</dd>
      </dl>
      <dl className={styles.d_list}>
        <dt>せいべつ</dt>
        <dd>{userInfo.gender}</dd>
      </dl>
      <dl className={styles.d_list}>
        <dt>ちほう</dt>
        <dd>{userInfo.country}</dd>
      </dl>
    </div>
  );
};
export default MyPageDedail;
