import React from 'react';
import { Alert } from 'reactstrap';

const Loading = conditionFn => Component => props => (
  <div>
    <Component {...props} />
    <div style={{ height: '90px' }}>
      {conditionFn(props) && (
        <Alert className="text-center loading" style={{ fontSize: '32px' }} color="light ">
          Loading...
        </Alert>
      )}
    </div>
  </div>
);

export default Loading;
