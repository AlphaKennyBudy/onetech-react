import React, { useContext } from "react";
import { Formik } from "formik";

import RegistrationSchema from "../../schemas/RegistrationSchema";
import { register } from "../../services/auth.service";
import UserContext from "../../contexts/UserContext";
import {
  RegistrationWrapper,
  RegistrationForm,
  RegistrationField,
  RegistrationErrorMessage,
  RegistrationButton,
  RegistrationTitle,
  RegistrationLabel,
} from "./RegistrationComponents";

function Registration() {
  const { setToken } = useContext(UserContext)!;
  return (
    <RegistrationWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          password: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values) => {
          await register(values).then((response) => setToken(response));
        }}
      >
        {({ errors, touched }) => (
          <RegistrationForm>
            <RegistrationTitle>Registration</RegistrationTitle>
            <RegistrationLabel htmlFor="firstName">
              First Name
            </RegistrationLabel>
            <RegistrationField name="firstName" placeholder="firstName" />
            <RegistrationErrorMessage component="div" name="firstName" />
            <RegistrationLabel htmlFor="lastName">Last Name</RegistrationLabel>
            <RegistrationField name="lastName" placeholder="lastName" />
            <RegistrationErrorMessage component="div" name="lastName" />
            <RegistrationLabel htmlFor="username">Username</RegistrationLabel>
            <RegistrationField name="username" placeholder="username" />
            <RegistrationErrorMessage component="div" name="username" />
            <RegistrationLabel htmlFor="password">Password</RegistrationLabel>
            <RegistrationField
              name="password"
              placeholder="password"
              type="password"
            />
            <RegistrationErrorMessage component="div" name="password" />
            <RegistrationButton type="submit">Submit</RegistrationButton>
          </RegistrationForm>
        )}
      </Formik>
    </RegistrationWrapper>
  );
}

export default Registration;
