import React from 'react';
import { Alert, Button } from 'reactstrap';
import { getItemsRequest } from '../../actions';

const Paginated = conditionFn => Component => props => (
  <div>
    <Component {...props} />
    <div style={{ height: '90px' }}>
      {conditionFn(props) && (
        <Alert className="text-center" style={{ fontSize: '32px' }} color="light ">
          Click here to load Items... &nbsp;&nbsp;&nbsp;
          <Button color="link" onClick={() => props.dispatch(getItemsRequest())}>
            Try Again
          </Button>
        </Alert>
      )}
    </div>
  </div>
);

export default Paginated;
