import {Component} from 'react';


export default class CharacterCard extends Component {
  renderCharacterSeries() {
    return null;
  }

  getCharacterImageSrc(path) {
    return `${path}/standard_medium.jpg`;
  }

  render() {
    return (
      <div className="col-xs-4 characterListItem">
        <div className="characterCard card row">
          <div className="col-xs-4">
            <img className="characterCardImage" src={this.getCharacterImageSrc('example/image/path/')}/>
          </div>
          <div className="col-xs-8">
            <div className="characterCardHeader">
              <h5 className="characterCardName">{'Example character name'}</h5>
            </div>
            <div className="characterCardSeries">
              {this.renderCharacterSeries()}
            </div>
          </div>

          <a className="characterCardLink" href={'http://example-link'}><i
            className="material-icons">link</i></a>
        </div>
      </div>
    );
  }
}