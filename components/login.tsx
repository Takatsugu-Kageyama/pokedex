// import style sheet
import styles from "../styles/login.module.scss";
// import Link
import Link from "next/link";
// import Formik
import { useFormik } from "formik";
// import Material UI
import { Button, TextField, ButtonBase } from "@mui/material";
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
  if (!values.username) {
    errors.username = "おなまえを入力してください。";
  }
  if (!values.password) {
    errors.password = "パスワードを入力してください。";
  }
  return errors;
};
// Login component:
const Login = () => {
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
        <title>なつかしいポケモン図鑑</title>
      </Head>
      <div className={styles.overall}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_wrap}>
            <div className={styles.form_container}>
              <h2 className={styles.head}>ログイン</h2>
              <div className={styles.input_area}>
                <TextField
                  onChange={formik.handleChange} // Get the input value. just like e.target.value
                  value={formik.values.username} // value name
                  className={styles.input}
                  name="username"
                  id="outlined-basic"
                  label="なまえ"
                  variant="outlined"
                />
                {formik.errors.username ? (
                  <p className={styles.error_text}>{formik.errors.username}</p>
                ) : null}
              </div>
              <div className={styles.input_area}>
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
              </div>
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
        </form>
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
