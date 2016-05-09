import React from 'react';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharacterCard from '../CharacterCard/CharacterCard';
import {
  fetchCharacterList,
  searchCharacterList
} from '../../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCharacterList();
  }

  renderList() {
    return this.props.characterList.map((character, index) => <CharacterCard character={character} key={index}/>);
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="appContainer container">
          <div className="characterList">
            <div className="row form-group">
              <input type="text" className="form-control" onChange={this.updateSearchText.bind(this)}
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

  updateSearchText(e) {
    this.props.searchCharacterList(e.target.value);
  }
}

function mapStateToProps(state) {
  return {
    characterList: state.characterList.items,
    isLoading: state.characterList.isLoading,
    searchText: state.characterList.searchText
  };
}

export default connect(mapStateToProps, {
  fetchCharacterList,
  searchCharacterList
})(App);
