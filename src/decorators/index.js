import { connect as _connect } from 'react-redux';

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign( {}, ownProps, stateProps, dispatchProps );

export function mapStateToProps(mapStateToProps) {
  return _connect(mapStateToProps, {}, mergeProps);
}

export function mapDispatchToProps(mapDispatchToProps) {

  const mapStateToProps = () => ({});

  return _connect(mapStateToProps, mapDispatchToProps, mergeProps);
}

export function connect() {
  return _connect(...arguments);
}
