import React from 'react';
import { reduxForm } from 'redux-form';
import { Error } from '.';

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

class ReduxFormV6Plus extends React.Component {
  submit(values) {
    console.log('submitted! form values:');
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log('this.props: ', this.props);

    return (
      <React.Fragment>
        <div>Redux-Form V6 Plus</div>
        <form onSubmit={handleSubmit(this.submit)}>
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
            <input type="radio" value="red" />
            <label htmlFor="red">red</label>
            <input type="radio" value="blue" />
            <label htmlFor="red">blue</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'testForm',
  validate,
})(ReduxFormV6Plus);
