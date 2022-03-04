import styles from "../styles/mypage.module.scss";
import MyPageImage from "../components/myPageImage";
import MyPageDedail from "../components/myPageDedail";
import { useAuth } from "../components/context/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { signOut } from "@firebase/auth";
import { auth, firebase } from "../util/firebase";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { userInfo } from "os";

const MyPage = () => {
  const { currentUser } = useAuth();
  //UserInfo(currentUser);
  const router = useRouter();
  //Redirect to user page if login information is available
  useEffect(() => {
    currentUser === null && router.push("/");
  }, [currentUser]);

  async function logoutFunc() {
    await signOut(auth);
  }

  return (
    <>
      <div className={styles.overall}>
        <div className={styles.page_container}>
          <div className={styles.my_mage_container}>
            <MyPageImage />
          </div>
          <div className={styles.my_detail_container}>
            <MyPageDedail />
            <div className={styles.btn_wrap}>
              <Link href="/pokedexUser">
                <Button
                  className={styles.btn}
                  type="submit"
                  variant="contained"
                >
                  ポケモンを見る
                </Button>
              </Link>
              <Button
                onClick={logoutFunc}
                className={styles.btn}
                type="submit"
                variant="contained"
              >
                ログアウトする
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPage;
