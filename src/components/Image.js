import React from 'react';
import { Media } from 'reactstrap';
import { default as Sensor } from 'react-visibility-sensor';
import PropTypes from 'prop-types';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: '' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(visible) {
    const { src } = this.props;

    if (visible) {
      this.setState({ src });
    }
  }

  render() {
    const { src } = this.props;

    return (
      <Sensor onChange={this.onChange} partialVisibility>
        <Media
          object
          src={this.state.src}
          alt="dp"
          style={{ width: '128px', display: 'inline-block' }}
        />
      </Sensor>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired
};
export default Image;
