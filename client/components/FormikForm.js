import React from 'react';
import { Error } from './';

const FormikForm = () => {
  return (
    <React.Fragment>
      <div>Formik</div>
      <form>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="color">favorite color</label>
          <br />
          <input type="radio" name="color" id="red" value="red" />
          <label htmlFor="red">red</label>
          <input type="radio" name="color" id="blue" value="blue" />
          <label htmlFor="red">blue</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default FormikForm;
