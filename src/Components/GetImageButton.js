import React, { Component } from 'react';

export default class GetImageButton extends Component {

  // fetchRoverImage = () =>{
  //
  // }

  render(){
    return(
      <button onClick={this.props.onClick} className="btn btn-secondary col-2 mt-3 mb-3 mx-auto">Get Rover Image</button>
      // This onClick is more than likely not working as intended
    )
  }
}
