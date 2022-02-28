// import style sheet
import styles from "../styles/register.module.scss";
// import Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
//import yup
import * as Yup from "yup";
import Head from "next/head";
import { FC } from "react";

/*-------------------------------Formik settings----------------------------*/

//The input value type of the form to create:
interface FormValuesType {
  username: string;
  password: string;
  gender: string;
  country: string;
}

//Validation
const formValidation = Yup.object().shape({
  username: Yup.string().required("おなまえは必須項目です。"),
  password: Yup.string().required("パスワードは必須項目です。"),
  country: Yup.string().required("ちほうの入力は必須です。"),
  gender: Yup.string().required("せいべつの入力は必須です。"),
});

//Gender Select values
const genderSelect = [
  {
    value: "おとこ",
    label: "おとこ",
  },
  {
    value: "おんな",
    label: "おんな",
  },
];

//Country Select values
const countrySelect = [
  {
    value: "カントーちほう",
    label: "カントーちほう",
  },
  {
    value: "ジョウトちほう",
    label: "ジョウトちほう",
  },
  {
    value: "ホウエンちほう",
    label: "ホウエンちほう",
  },
  {
    value: "シンオウちほう",
    label: "シンオウちほう",
  },
  {
    value: "ヒスイちほう",
    label: "ヒスイちほう",
  },
  {
    value: "イッシュちほう",
    label: "イッシュちほう",
  },
  {
    value: "カロスちほう",
    label: "カロスちほう",
  },
  {
    value: "アローラちほう",
    label: "アローラちほう",
  },
  {
    value: "ガラルちほう",
    label: "ガラルちほう",
  },
];

/*-----------------------------Register component--------------------------*/
const Register: FC = () => {
  return (
    <>
      <Head>
        <title>かわいいポケモン図鑑 | とうろくがめん</title>
      </Head>
      <Formik
        initialValues={{ username: "", password: "", gender: "", country: "" }}
        validationSchema={formValidation}
        onSubmit={(values: FormValuesType, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className={styles.form_wrap}>
            <h2>登録画面</h2>
            <div className={styles.from_container}>
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
