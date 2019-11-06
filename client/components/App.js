import React from 'react';
import { ReduxForm, FormikForm } from './';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <ReduxForm />
      </div>
      <div
        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <FormikForm />
      </div>
    </div>
  );
};

export default App;
