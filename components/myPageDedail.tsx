import styles from "../styles/mypageDetail.module.scss";

const MyPageDedail = () => {
  return (
    <div className={styles.detail_container}>
      <dl className={styles.d_list}>
        <dt>なまえ</dt>
        <dd>たかつぐ</dd>
      </dl>
      <dl className={styles.d_list}>
        <dt>せいべつ</dt>
        <dd>おとこ</dd>
      </dl>
      <dl className={styles.d_list}>
        <dt>ちほう</dt>
        <dd>カントーちほう</dd>
      </dl>
    </div>
  );
};
export default MyPageDedail;
