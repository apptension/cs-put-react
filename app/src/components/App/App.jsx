import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharacterCard from '../CharacterCard/CharacterCard';
import api from '../../services/api';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      characterList: []
    };
  }

  componentWillMount() {
    api.getCharacterList().then((characterList) => {
      this.setState({characterList})
    });
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
    const matches = (item, query) => {
      const containsQuery = item.name.replace(/\s+/g, '').toLowerCase().indexOf(query.replace(/\s+/g, '').toLowerCase()) >= 0;
      return query.length === 0 || containsQuery;
    };

    return this.state.characterList
      .filter((character) => matches(character, this.state.query))
      .map((character, index) => <CharacterCard character={character} key={index}/>);
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
