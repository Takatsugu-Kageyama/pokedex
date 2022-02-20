// import style sheet
import styles from "../styles/login.module.scss";
// import Formik
import { Formik, Form, FormikHelpers } from "formik";
// import Material UI
import { Button, TextField, ButtonBase } from "@mui/material";

/*-------------------------------Formik settings----------------------------*/

// Define type of values:
interface Values {
  username: string; // type of string
  passwords: string; // type of string
}

// Login component
const Login = () => {
  return (
    <>
      <Formik
        // initial input value
        initialValues={{
          username: "",
          passwords: "",
        }}
        // when the button is pushed:
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className={styles.form_wrap}>
            <div className={styles.form_container}>
              <h2 className={styles.head}>ログイン</h2>
              <TextField
                className={styles.input}
                name="username"
                id="outlined-basic"
                label="なまえ"
                variant="outlined"
              />
              <TextField
                className={styles.input}
                name="password"
                type="password"
                id="outlined-basic"
                label="パスワード"
                variant="outlined"
              />
              <Button className={styles.btn} type="submit" variant="contained">
                送信する
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Login;
