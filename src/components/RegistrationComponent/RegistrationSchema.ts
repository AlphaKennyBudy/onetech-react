import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  username: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

export default RegistrationSchema;
