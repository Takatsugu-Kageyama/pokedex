import styles from "../styles/mypage.module.scss";
import MyPageImage from "../components/myPageImage";
import MyPageDedail from "../components/myPageDedail";

const MyPage = () => {
  return (
    <div className={styles.overall}>
      <div className={styles.my_mage_container}>
        <MyPageImage />
      </div>
      <div className={styles.my_detail_container}>
        <MyPageDedail />
      </div>
    </div>
  );
};
export default MyPage;
