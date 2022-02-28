import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  //username validation
  username: Yup.string()
    .required("おなまえは必須項目です。")
    .max(8, "お名前は８文字いないで入力してください。"),
  //password validation
  password: Yup.string()
    .required("パスワードは必須項目です。")
    .matches(/(?=.*[a-z])/, "小文字を含めてください")
    .matches(/(?=.*[A-Z])/, "大文字を含めてください")
    .matches(/(?=.*[0-9])/, "数字を含めてください")
    .min(8, "最低８文字含めてください"),
  //country validation
  country: Yup.string().required("ちほうの入力は必須です。"),
  //gender validation
  gender: Yup.string().required("せいべつの入力は必須です。"),
});
