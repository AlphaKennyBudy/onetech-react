import React from "react";
import { Formik, Form, Field } from "formik";

import "./RegistrationComponent.css";

import RegistrationSchema from "../../schemas/RegistrationSchema";
import { register } from "../../services/auth.service";

function RegistrationComponent() {
  return (
    <div className="RegistrationComponent">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          password: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="RegistrationForm">
            <Field name="firstName" placeholder="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" placeholder="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
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

export default RegistrationComponent;
