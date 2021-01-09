import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory} from "react-router-dom";
import * as Yup from "yup";
import {
  StyledCartForm,
  StyledField,
  StyledForm,
  StyledFildPlace,
  StyledButtonSubmit, 
} from "./cartform.style";
const CartForm = () => {

  const history = useHistory();

  const dateRegExp1 = /[0-3][0-9].[0-1][0-9].20[0-9]{2}/

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("That doesn't look like a email").required("Required"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    adress: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    date: Yup.string().matches(dateRegExp1, "That doesn't look like a date").required("Required")
  });

  return (
    <StyledCartForm>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          adress: "",
          date: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          history.push("/Success");
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledFildPlace>
              First name
              <StyledField placeholder="Name" name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </StyledFildPlace>

            <StyledFildPlace>
              Last Name
              <StyledField placeholder="Surname" name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </StyledFildPlace>

            <StyledFildPlace>
              Email
              <StyledField name="email" placeholder="example@mail.com" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </StyledFildPlace>

            <StyledFildPlace>
              Phone
              <StyledField name="phone" placeholder="+380xxxxxxxxx" />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </StyledFildPlace>

            <StyledFildPlace >
              Adress
              <StyledField placeholder="City, street, hous number" name="adress" />
              {errors.adress && touched.adress ? (
                <div>{errors.adress}</div>
              ) : null}
            </StyledFildPlace>

            <StyledFildPlace >
              Date:
              <StyledField placeholder="DD.MM.YYYY" name="date"  />
              {errors.date && touched.date ? (
                <div>{errors.date}</div>
              ) : null}
            </StyledFildPlace>
            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
    </StyledCartForm>
  );
};

export default CartForm;