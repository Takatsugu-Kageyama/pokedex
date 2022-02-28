// import style sheet
import styles from "../styles/register.module.scss";
//import state
import { useEffect, useState } from "react";
// import Formik
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//import yup
import * as Yup from "yup";
import Head from "next/head";
import Box from "@mui/material/Box";

/*-------------------------------Formik settings----------------------------*/

//The input value type of the form to create:
interface FormValuesType {
  username: string;
  password: string;
}

//Validation
const formValidation = Yup.object().shape({
  username: Yup.string().required("おなまえは必須項目です。"),
  password: Yup.string()
    .required("パスワードは必須項目です。")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "大文字と小文字、数字を含めた８文字のパスワードで設定してください。"
    ),
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
const Register = () => {
  return (
    <>
      <Head>
        <title>かわいいポケモン図鑑 | とうろくがめん</title>
      </Head>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={formValidation}
        onSubmit={(
          values: FormValuesType,
          { setSubmitting }: FormikHelpers<FormValuesType>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
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
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "15ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Field
                      component={TextField}
                      label="おなまえ"
                      name="username"
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
                      label="せいべつ"
                      type="text"
                      component={TextField}
                      select
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
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
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>ちほう</dt>
                <dd>
                  <Box>
                    <Field
                      label="ちほう"
                      type="text"
                      component={TextField}
                      select
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
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
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>パスワード</dt>
                <dd>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "15ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Field
                      component={TextField}
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
