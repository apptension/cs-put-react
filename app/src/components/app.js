import React from 'react';

import data from '../mock/people.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  renderListItems() {
    const matches = (item, query) => {
      const dataString = item.firstName + item.lastName + item.email;
      const containsQuery = dataString.replace(/\s+/g, '').toLowerCase().indexOf(query.replace(/\s+/g, '').toLowerCase()) >= 0;
      return query.length === 0 || containsQuery;
    };

    return data.filter((item) => matches(item, this.state.query)).map((item, index) => (
      <li key={index}>
        {item.firstName} {item.lastName} {`<${item.email}>`}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <input onChange={this.updateQuery.bind(this)}/>
        <ul>
          {this.renderListItems()}
        </ul>
      </div>
    );
  }

  updateQuery(e) {
    const query = e.target.value;
    this.setState({query});
  }
}
