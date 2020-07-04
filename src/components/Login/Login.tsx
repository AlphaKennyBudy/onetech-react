import React, { useContext } from "react";
import { Formik } from "formik";

import LoginSchema from "../../schemas/LoginSchema";
import { login } from "../../services/auth.service";
import UserContext from "../../contexts/UserContext";
import {
  LoginWrapper,
  LoginForm,
  LoginField,
  LoginErrorMessage,
  LoginButton,
  LoginTitle,
  LoginLabel,
} from "./LoginComponents";

function Login() {
  const { setToken } = useContext(UserContext)!;
  return (
    <LoginWrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await login(values).then((response) => setToken(response));
        }}
      >
        {({ errors, touched }) => (
          <LoginForm>
            <LoginTitle>Login</LoginTitle>
            <LoginLabel htmlFor="username">Username</LoginLabel>
            <LoginField name="username" placeholder="username" />
            <LoginErrorMessage component="span" name="username" />
            <LoginLabel htmlFor="password">Password</LoginLabel>
            <LoginField
              name="password"
              placeholder="password"
              type="password"
            />
            <LoginErrorMessage component="span" name="password" />
            <LoginButton type="submit">Submit</LoginButton>
          </LoginForm>
        )}
      </Formik>
    </LoginWrapper>
  );
}

export default Login;
