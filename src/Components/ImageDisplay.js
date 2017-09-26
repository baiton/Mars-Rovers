import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render(){
    return(
        <img className="rover-pics m-auto mt-3 mb-3" src={this.props.photo} alt="Rover Photos"/>
    )
  }
}

// data.photos.img_src = image url
