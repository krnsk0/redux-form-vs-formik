import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ReduxForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Redux-Form</div>
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
        </form>
      </React.Fragment>
    );
  }
}

export default reduxForm({ form: 'testForm' })(ReduxForm);
