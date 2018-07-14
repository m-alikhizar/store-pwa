import React from 'react';
import { Alert, Button } from 'reactstrap';

const Paginated = conditionFn => Component => props => (
  <div>
    <Component {...props} />
    <div style={{ height: '90px' }}>
      {conditionFn(props) && (
        <Alert className="text-center" style={{ fontSize: '32px' }} color="light ">
          Click here to load Items... &nbsp;&nbsp;&nbsp;
          <Button color="link" onClick={() => props.getItemsRequest()}>
            Try Again
          </Button>
        </Alert>
      )}
    </div>
  </div>
);

export default Paginated;
