import React from 'react';
import { Alert } from 'reactstrap';

const Loading = conditionFn => Component => props => (
  <div>
    <Component {...props} />

    {conditionFn(props) && (
      <Alert className="col-8 text-center" style={{ fontSize: '32px' }} color="light ">
        Loading...
      </Alert>
    )}
  </div>
);

export default Loading;
