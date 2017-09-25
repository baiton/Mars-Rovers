import React, { Component } from 'react';

export default class GetImageButton extends Component {

  fetchRoverImage = () =>{

  }

  render(){
    return(
      <button onClick={this.props.onClick} className="btn btn-dark">Get Rover Image</button>
      // This onClick is more than likely not working as intended
    )
  }
}
