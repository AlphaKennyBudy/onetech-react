import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";

import "./LoginComponent.css";

import LoginSchema from "../../schemas/LoginSchema";
import { login } from "../../services/auth.service";
import UserContext from "../../contexts/UserContext";

function LoginComponent() {
  const { setToken } = useContext(UserContext)!;
  return (
    <div className="LoginComponent">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await login(values).then((response) => setToken(response));
        }}
      >
        {({ errors, touched }) => (
          <Form className="LoginForm">
            <Field name="username" placeholder="username" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <Field name="password" placeholder="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginComponent;
