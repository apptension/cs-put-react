import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import api from '../../services/api';

import data from '../../mock/people.json';


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

  renderList() {
    return <ul>{this.renderListItems()}</ul>;
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="appContainer container">
          <div className="characterList">
            <div className="row form-group">
              <input type="text" className="form-control" onChange={this.updateQuery.bind(this)}
                     placeholder="Search"/>
            </div>

            <div className="row">
              {this.renderList()}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  updateQuery(e) {
    const query = e.target.value;
    this.setState({query});
  }
}
