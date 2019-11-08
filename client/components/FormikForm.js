import React from 'react';
import { Formik } from 'formik';
import { Error } from './';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\d{3}-\d{3}-\d{4}$/i.test(values.phone)) {
    errors.phone = 'must be ddd-ddd-dddd';
  }
  if (!values.color) {
    errors.color = 'must pick a color';
  }
  return errors;
};

const FormikForm = () => {
  return (
    <React.Fragment>
      <div>Formik</div>
      <Formik
        initialValues={{ name: '', phone: '', color: 'red' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div>
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
            </div>
            <div>
              <label htmlFor="color">favorite color</label>
              <br />
              <input
                type="radio"
                name="color"
                id="red"
                value="red"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.color === 'red'}
              />
              <label htmlFor="red">red</label>
              <input
                type="radio"
                name="color"
                id="blue"
                value="blue"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.color === 'blue'}
              />
              <label htmlFor="red">blue</label>
            </div>
            <button type="submit">Submit</button>

            <Error>{JSON.stringify(errors)}</Error>
            <div>Values: {JSON.stringify(values)}</div>
            <div>Touched: {JSON.stringify(touched)}</div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default FormikForm;
