import React from 'react';
import { Link } from 'reactstrap';

const Paginated = conditionFn => Component => props => (
  <div>
    <Component {...props} />
    {conditionFn(props) && (
      <Alert
        className="col-lg-8 col-md-8 col-xs-12 text-center"
        style={{ margin: '36px auto', fontSize: '32px' }}
        color="light "
      >
        Click here to load Items...&nbsp;&nbsp;&nbsp;
        <Link color="primary" onClick={props.onPaginatedSearch}>
          Try Again
        </Link>
      </Alert>
    )}
  </div>
);

export default Paginated;
