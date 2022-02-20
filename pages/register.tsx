// import style sheet
import styles from "../styles/register.module.scss";
//import state
import { useState } from "react";
// import Formik
import { Formik, Form, FormikHelpers } from "formik";
// import Material UI
import { Button, TextField } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

/*-------------------------------Formik settings----------------------------*/

// Define type of values:
interface Values {
  username: string; // type of string
  country: string; // type of string
  passwords: string; // type of string
}

// Register component
const Register = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Formik
        // initial input value
        initialValues={{
          username: "",
          country: "",
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
            <h2>登録画面</h2>
            <div className={styles.from_container}>
              <dl className={styles.r_list}>
                <dt>おなまえ</dt>
                <dd>
                  <TextField
                    className={styles.input}
                    name="username"
                    id="outlined-basic"
                    label="なまえ"
                    variant="outlined"
                  />
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>ちほう</dt>
                <dd>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      ちほう
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="カントー">カントーちほう</MenuItem>
                      <MenuItem value="ジョウト">ジョウトちほう</MenuItem>
                      <MenuItem value="ホウエン">ホウエンちほう</MenuItem>
                      <MenuItem value="シンオウ">シンオウちほう</MenuItem>
                      <MenuItem value="ヒスイ">ヒスイちほう</MenuItem>
                      <MenuItem value="イッシュ">イッシュちほう</MenuItem>
                      <MenuItem value="カロス">カロスちほう</MenuItem>
                      <MenuItem value="アローラ">アローラちほう</MenuItem>
                      <MenuItem value="ガラル">ガラルちほう</MenuItem>
                    </Select>
                  </FormControl>
                </dd>
              </dl>
              <dl className={styles.r_list}>
                <dt>パスワード</dt>
                <dd>
                  <TextField
                    className={styles.input}
                    name="password"
                    type="password"
                    id="outlined-basic"
                    label="パスワード"
                    variant="outlined"
                  />
                </dd>
              </dl>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Register;
