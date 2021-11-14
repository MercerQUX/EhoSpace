import * as Yup from "yup";

export const ValidStatusSchema = Yup.object().shape({
  editStatus: Yup.string()
    .max(150, "Warning: Maximum characters 150")
    .required("Warning: Field required"),
});

export const ValidMessageSchema = Yup.object().shape({
  bodyMessage: Yup.string().required("Warning:Field required"),
});

export const validLoginFormSchema = Yup.object().shape({
  login: Yup.string()
    .required("Warning: Fields must not be empty")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Warning: Please use only latin characters and numbers"
    )
    .min(8, "Warning: Minimul characters 8")
    .max(24, "Warning: Maximum characters 24"),
  password: Yup.string()
    .required("Warning: Fields must not be empty")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Warning: Please use only latin characters and numbers"
    )
    .matches(/[0-9]+/, "Warning: Must have one or more digits")
    .min(8, "Warning: Minimul characters 8")
    .max(24, "Warning: Maximum characters 24"),
});

export const valieRegisterFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Warning: Field Email must not be empty")
    .email(),
  login: Yup.string()
    .required("Warning: Field Login must not be empty")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Warning: Please use only latin characters and numbers"
    )
    .min(8, "Warning: Minimul characters 8")
    .max(24, "Warning: Maximum characters 24"),
  name: Yup.string()
    .required("Warning: Field Name is empty")
    .min(2, "Warning: Name less than 2 characters")
    .max(35, "Warning: Name more than 35 characters"),
  surname: Yup.string()
    .required("Warning: Field Surname is empty")
    .min(2, "Warning: Surname less than 2 characters")
    .max(35, "Warning: Surname more than 35 characters"),
  country: Yup.string()
    .required("Warning: Field Country is empty")
    .max(35, "Warning: Field Country more than 35 characters"),
  password: Yup.string()
    .required("Warning: Field Password must not be empty")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Warning: Please use only latin characters and numbers"
    )
    .matches(/[0-9]+/, "Warning: Must have one or more digits")
    .min(8, "Warning: Minimul characters 8")
    .max(24, "Warning: Maximum characters 24"),
});

export const ValidCreatePostSchema = Yup.object().shape({
  newPost: Yup.string()
    .required("Warning: Field empty")
    .min(10, "Warning: Minimul characters 10")
    .max(500, "Warning: Maximum characters 500"),
});

export const validEditProfileSchema = Yup.object().shape({
  profileName: Yup.string()
    .required("Warning: Field Name is empty")
    .min(2, "Warning: Name less than 2 characters")
    .max(35, "Warning: Name more than 35 characters"),
  profileSurname: Yup.string()
    .required("Warning: Field Surname is empty")
    .min(2, "Warning: Surname less than 2 characters")
    .max(35, "Warning: Surname more than 35 characters"),
  profileNick: Yup.string().max(
    25,
    "Warning: Nickname more than 25 characters"
  ),
  profileStatus: Yup.string()
    .required("Warning: Field Status is empty")
    .max(150, "Warning: Surname more than 150 characters"),
  profileCountry: Yup.string()
    .required("Warning: Field Country is empty")
    .max(35, "Warning: Field Country more than 35 characters"),
  profileCity: Yup.string()
    .min(3, "Field City less than 3 characters")
    .max(35, "Warning: Field City more than 35 characters"),
  profileAvatar: Yup.string()
    .url("Warning: Field for Avatar must be URL")
    .matches(
      /\.(gif|jpg|jpeg|jp2)/,
      `Warning: Field 
  must end with ".gifs/.jpg/.jpeg" format`
    ),
});
