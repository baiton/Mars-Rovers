import React, {Component} from 'react';

import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "yuDqDvCMpuimoGO7hQ72R6QR8gfQkdNwj5cuWWk0"

export default class GetImageForm extends Component {
  constructor() {
    super()
    this.state = {
      rover: "",
      camera: "",
      images: [],
      sol: ""
    }
  }

// These Methods need work.  We want to have where each change updates the state to be passed to the API and Submit button
  handleRover = (event) => {
    this.setState({rover: event.target.value});
  }
  handleCamera = (event) => {
    this.setState({camera: event.target.value});
  }
  handleSol = (event) => {
    this.setState({sol: event.target.value});
  }

  render() {
    return (
      <div className="d-flex flex-column">
      <form className="d-flex justify-content-between">
        <div className="d-flex col-3">
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} className="custom-select" id="rover">
            <option selected value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
        </div>
        <div className="d-flex col-3">
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} className="custom-select" id="rover">
            <option selected value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
        </div>
        <div className="d-flex col-3">
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input onChange={this.handleSol} className="form-control col-6" type="number" max="2000" min="1000"/>
        </div>
      </form>
      <GetImageButton
        onClick={this.state}
//You want to make sure the onClick is getting the entire state to fill submit!!!!
      />
      </div>
    )
  }
}
