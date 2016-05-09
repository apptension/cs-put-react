import {Component} from 'react';


export default class CharacterCard extends Component {
  renderCharacterSeries() {
    return <span>{this.props.character.series.items.map((item) => item.name).join(', ')}</span>;
  }

  getCharacterImageSrc(path) {
    return `${path}/standard_medium.jpg`;
  }

  render() {
    return (
      <div className="col-xs-4 characterListItem">
        <div className="characterCard card row">
          <div className="col-xs-4">
            <img className="characterCardImage" src={this.getCharacterImageSrc(this.props.character.thumbnail.path)}/>
          </div>
          <div className="col-xs-8">
            <div className="characterCardHeader">
              <h5 className="characterCardName">{this.props.character.name}</h5>
            </div>
            <div className="characterCardSeries">
              {this.renderCharacterSeries()}
            </div>
          </div>

          <a className="characterCardLink" href={this.props.character.urls[0].url}><i
            className="material-icons">link</i></a>
        </div>
      </div>
    );
  }
}