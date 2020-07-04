import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

const color = "#FEA04F";

const LoginWrapper = styled.div`
  background: #353740;
  border-radius: 5px;

  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${color};
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const LoginField = styled(Field)`
  width: 50%;
  height: 7%;
  outline: none;

  background: #ebebeb;
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 5px;
`;

const LoginErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 3px;
`;

const LoginButton = styled.button`
  width: 30%;
  height: 10%;

  border-radius: 5px;
  border: none;
`;

const LoginTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
`;

const LoginLabel = styled.label`
  margin-bottom: 3px;
`;

export {
  LoginWrapper,
  LoginForm,
  LoginField,
  LoginErrorMessage,
  LoginButton,
  LoginTitle,
  LoginLabel,
};
