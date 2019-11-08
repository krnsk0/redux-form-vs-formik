import React from 'react';
import { ReduxFormV5, ReduxFormV6Plus, FormikForm } from './';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <ReduxFormV5 />
      </div>
      <div
        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <ReduxFormV6Plus />
      </div>
      <div
        style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <FormikForm />
      </div>
    </div>
  );
};

export default App;
