import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

const color = "#FEA04F";

const RegistrationWrapper = styled.div`
  background: #353740;
  border-radius: 5px;

  width: 50%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${color};
`;

const RegistrationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const RegistrationField = styled(Field)`
  width: 50%;
  height: 7%;
  outline: none;

  background: #ebebeb;
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 5px;
`;

const RegistrationErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 3px;
`;

const RegistrationButton = styled.button`
  width: 30%;
  height: 7%;

  border-radius: 5px;
  border: none;
`;

const RegistrationTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
`;

const RegistrationLabel = styled.label`
  margin-bottom: 3px;
`;

export {
  RegistrationWrapper,
  RegistrationForm,
  RegistrationField,
  RegistrationErrorMessage,
  RegistrationButton,
  RegistrationTitle,
  RegistrationLabel,
};
