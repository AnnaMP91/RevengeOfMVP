import React from 'react';
import Button from 'react-bootstrap/Button';

class DogResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.dogResult.length > 0 ?
          <>
            <img src={this.props.dogResult[0].photos[0].medium}></img>
            <p>{this.props.dogResult[0].name}</p>
            <a className="btn btn-primary" href={this.props.dogResult[0].url} target="_blank">Adopt me uwu</a>
          </> :
          <div>
            <p>No matches in your area</p>
            <Button href="/">Take me back</Button>
          </div>
        }

      </div>
    )
  }
}

export default DogResult;