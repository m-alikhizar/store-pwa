import React from 'react';
import _ from 'lodash';
import { Alert, Link } from 'reactstrap';

export const withLoading = (conditionFn) => (Component) => (props) =>
  <div style={{marginBottom: '30px', position: 'relative'}}>
    <Component {...props} />

    { conditionFn(props) && <Alert className="col-lg-8 col-md-8 col-xs-12 text-center" style={{fontSize: '32px'}} color="light ">
      Loading...
    </Alert> }
  </div>


export const withPaginated = (conditionFn) => (Component) => (props) =>
  <div>
    <Component {...props} />
      { conditionFn(props) && <Alert className="col-lg-8 col-md-8 col-xs-12 text-center" style={{margin: '36px auto', fontSize: '32px'}} color="light ">
        Click here to load Items...&nbsp;&nbsp;&nbsp;
        <Link color="primary" onClick={props.onPaginatedSearch}>Try Again</Link>
    </Alert> }
  </div>

export const withInfiniteScroll = (conditionFn) => (Component) =>
  class withInfiniteScroll extends React.Component {
    constructor(props) {
      super(props);

      this.onScroll = _.throttle(this.onScroll, 1000).bind(this);

      this.getData = this.getData.bind(this);

      window.addEventListener('scroll', this.onScroll, false);

      this.state = {
        error: false,
        loading: false,
      }
    }

    componentWillMount() {
      this.getData();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    getData() {
      const promise = this.props.onPaginatedSearch();

      this.setState({
        error: false,
        loading: true
      });

      promise.then(
        () => {
          this.setState({
            error: false,
            loading: false
          })
        }
      )
      .catch(
        () => {
          this.setState({
            error: true,
            loading: false
          })
        }
      )
    }

    onScroll(e) {
      if(conditionFn(this.props)
      && !this.state.loading
      && !this.state.error) {
        console.log('SCROLLING');
        e.preventDefault()
        this.getData()
      }
    }

    render() {
      const newProps = { ...this.props, ...this.state };

      return <Component { ...newProps } />;
    }
  }
