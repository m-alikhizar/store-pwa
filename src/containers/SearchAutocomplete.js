import React from 'react';
import Autocomplete from 'react-autocomplete';
import { Container } from 'reactstrap';
import { parse, stringify } from 'query-string';
import debounce from 'lodash.debounce';
import { connect } from '../decorators';
import { setFilters, getSearchSuggestions } from '../actions';
import styles from '../styles/SearchAutocomplete.css';

@connect()

/*
 * Search Autocomplete
 */
export default class SearchAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };

    this.dispatch = props.dispatch;

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.query = debounce(this.query, 250, { trailing: true }).bind(this);
  }

  componentDidMount() {
    const { search } = parse(location.search);

    if (search) {
      this.setState({ value: search });
      this.dispatch(setFilters({ query: search }));
    }
  }

  onKeyDown(e) {
    const val = e.target.value;

    if (e.keyCode === 13) {
      this.onSelect(val);
    }
  }

  onChange(e) {
    const val = e.target.value;

    this.setState({ value: val });

    this.query(val);
  }

  onSelect(val) {
    if (val) {
      this.setState({ value: val });
      location.href = `/?${stringify({ search: val })}`;
    } else {
      location.search = '';
    }
  }

  query(str) {
    this.dispatch(getSearchSuggestions(str)).then((suggestions) => {
      this.setState({ suggestions });
    });
  }

  render() {
    const renderItemComponent = (item, hovered) => (
      <div key={item.key} style={{ background: hovered && '#e0e0e0' }}>
        {item.label}
      </div>
    );

    return (
      <Container className={styles.wrapper}>
        <Autocomplete
          getItemValue={item => item.label}
          items={this.state.suggestions}
          inputProps={{ onKeyDown: this.onKeyDown, placeholder: 'Search', 'aria-label': 'input' }}
          renderItem={renderItemComponent}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </Container>
    );
  }
}
