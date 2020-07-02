import React from "react";
import { Formik, Form, Field } from "formik";

import "./LoginComponent.css";

import LoginSchema from "./LoginSchema";
import { login } from "../../services/auth.service";

function LoginComponent() {
  return (
    <div className="LoginComponent">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          login(values);
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
