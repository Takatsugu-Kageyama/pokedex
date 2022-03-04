// import style sheet
import styles from "../styles/register.module.scss";
// import Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Head from "next/head";
//Import React
import { FC, useContext, useEffect } from "react";
//Import From Value and TypeSchema
import { RegisterFormValuesType } from "../util/formSchema";
import { countrySelect, genderSelect } from "../util/formValue";
import { RegisterFormValidation } from "../util/formValidation";
import { useAuth } from "../components/context/authContext";
import { auth } from "../util/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
//Import Firebase

/*-----------------------------Register component--------------------------*/
const Register: FC = () => {
  return (
    <>
      <Head>
        <title>かわいいポケモン図鑑 | とうろくがめん</title>
      </Head>
      <Formik
        //Initial form value
        initialValues={{
          email: "",
          username: "",
          password: "",
          gender: "",
          country: "",
        }}
        validationSchema={RegisterFormValidation} //validation
        //When button is clicked
        onSubmit={async (values: RegisterFormValuesType, { setSubmitting }) => {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          ).catch((error) => alert(error.message));
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className={styles.form_wrap}>
            <h2>登録画面</h2>
            <div className={styles.from_container}>
              <dl className={styles.r_list}>
                <dt>メールアドレス</dt>
                <dd>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "15ch" },
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
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>おなまえ</dt>
                <dd>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "15ch" },
                    }}
                  >
                    <Field
                      as={TextField}
                      label="おなまえ"
                      name="username"
                      type="text"
                    />
                  </Box>
                  <p className={styles.error_text}>
                    <ErrorMessage name="username" />
                  </p>
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>せいべつ</dt>
                <dd>
                  <Box>
                    <Field
                      as={TextField}
                      label="せいべつ"
                      type="text"
                      name="gender"
                      select
                      variant="standard"
                      sx={{ m: 1, width: "15ch" }}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {genderSelect.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </Field>
                  </Box>
                  <p className={styles.error_text}>
                    <ErrorMessage name="gender" />
                  </p>
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>ちほう</dt>
                <dd>
                  <Box>
                    <Field
                      as={TextField}
                      label="ちほう"
                      type="text"
                      name="country"
                      select
                      variant="standard"
                      sx={{ m: 1, width: "15ch" }}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {countrySelect.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </Field>
                  </Box>
                  <p className={styles.error_text}>
                    <ErrorMessage name="country" />
                  </p>
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>パスワード</dt>
                <dd>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "15ch" },
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
                </dd>
              </dl>
              <div className={styles.btn_wrap}>
                <Button
                  className={styles.btn}
                  type="submit"
                  variant="contained"
                >
                  送信する
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Register;
