// import style sheet
import styles from "../styles/register.module.scss";
//import state
import { useEffect, useState } from "react";
// import Formik
import { useFormik, Formik, Form, Field } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Head from "next/head";

/*-------------------------------Formik settings----------------------------*/

//The input value type of the form to create:
type FormValueType = {
  username: string;
  password: string | number;
};

//Sending process:
const onSubmit = (values: FormValueType) => {
  alert(JSON.stringify(values, null, 2));
};
/**Create error: **/

// Define error type:
type FormErrorType = {
  [P in keyof FormValueType]?: string | number;
};
//validate function:
const validate = (values: FormValueType): FormErrorType => {
  const errors: FormErrorType = {};
  //Username Error
  if (!values.username) {
    errors.username = "おなまえを入力してください。";
  }
  //Password Error
  if (!values.password) {
    errors.password = "パスワードを入力してください。";
  }
  return errors;
};
/*-----------------------------Register component--------------------------*/
const Register = () => {
  // Define form:
  const formik = useFormik<FormValueType>({
    initialValues: { username: "", password: "" }, // First interface values
    validate: validate, //validation
    onSubmit: onSubmit, //onSubmit Function
  });
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(d) {
    var config = {
      kitId: 'mlv6mbl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  `,
          }}
        />
        <title>かわいいポケモン図鑑 | とうろくがめん</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.form_wrap}>
          <h2>登録画面</h2>
          <div className={styles.from_container}>
            <dl className={styles.r_list}>
              <dt>おなまえ</dt>
              <dd>
                <TextField
                  onChange={formik.handleChange} // Get the input value. just like e.target.value
                  value={formik.values.username} // value name
                  className={styles.input}
                  name="username"
                  id="outlined-basic"
                  label="なまえ"
                  variant="outlined"
                />
                {formik.errors.password ? (
                  <p className={styles.error_text}>{formik.errors.username}</p>
                ) : null}
              </dd>
            </dl>
            <dl className={styles.r_list}>
              <dt>せいべつ</dt>
              <dd></dd>
            </dl>
            <dl className={styles.r_list}>
              <dt>ちほう</dt>
              <dd></dd>
            </dl>
            <dl className={styles.r_list}>
              <dt>パスワード</dt>
              <dd>
                <TextField
                  onChange={formik.handleChange} //Get input value
                  value={formik.values.password} // value name
                  className={styles.input}
                  name="password"
                  type="password"
                  id="outlined-basic"
                  label="パスワード"
                  variant="outlined"
                />
                {formik.errors.password ? (
                  <p className={styles.error_text}>{formik.errors.password}</p>
                ) : null}
              </dd>
            </dl>
            <div className={styles.btn_wrap}>
              <Button
                onSubmit={() => {
                  formik.handleSubmit();
                }}
                className={styles.btn}
                type="submit"
                variant="contained"
              >
                送信する
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Register;
