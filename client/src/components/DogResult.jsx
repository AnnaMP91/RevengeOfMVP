import React from 'react';

class DogResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.dogResult[0].image.url}></img>
        <p>{this.props.dogResult[0].name}</p>
      </div>
    )
  }
}

export default DogResult;