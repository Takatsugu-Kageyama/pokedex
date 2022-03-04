// import style sheet
import styles from "../styles/login.module.scss";
// import Link
import Link from "next/link";
// import Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import Head from "next/head";
import { LoginFormValidation } from "../util/formValidation";
import { LoginFormValuesType } from "../util/formSchema";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../util/firebase";
import { useAuth } from "./context/authContext";

/*-------------------------------Formik settings----------------------------*/
// Login component:
const Login = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>なつかしいポケモン図鑑</title>
      </Head>
      <div className={styles.overall}>
        <Formik
          //Initial form value
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginFormValidation} //validation
          //When button is clicked
          onSubmit={async (values: LoginFormValuesType, { setSubmitting }) => {
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            )
              .then((response) => {
                router.push("/pokedexUser");
              })
              .catch((error) => alert(error.message));
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className={styles.form_wrap}>
              <div className={styles.form_container}>
                <h2 className={styles.head}>ログイン</h2>
                <div className={styles.input_area}>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                  >
                    <Field
                      as={TextField}
                      label="pokedex@pika.com"
                      name="email"
                      type="text"
                    />
                  </Box>
                  <p className={styles.error_text}>
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className={styles.input_area}>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                  >
                    <Field
                      as={TextField}
                      label="パスワード"
                      name="password"
                      type="password"
                    />
                  </Box>
                  <p className={styles.error_text}>
                    <ErrorMessage name="password" />
                  </p>
                </div>
                <Button
                  className={styles.btn}
                  type="submit"
                  variant="contained"
                >
                  送信する
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
        <div className={styles.ano_btn}>
          <div className={styles.n_log_btn}>
            <Link href="/register">はじめてのログイン</Link>
          </div>
          <div className={styles.register_btn}>
            <Link href="/pokedexNonUser">ログインしないでみる</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
