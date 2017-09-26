import React, {Component} from 'react';

import GetImageButton from './GetImageButton'

const API_KEY = "yuDqDvCMpuimoGO7hQ72R6QR8gfQkdNwj5cuWWk0"

export default class GetImageForm extends Component {
  constructor() {
    super()
    this.state = {
      camera: "",
      images: [],
      sol: ""
    }
  }

// These Methods need work.  We want to have where each change updates the state to be passed to the API and Submit button
  handleRover = (event) => {
    console.log("onChange rover", event.target.value);
    this.props.roverSelection({rover: event.target.value});
  }
  handleCamera = (event) => {
    console.log("onChange camera", event.target.value);
    this.setState({camera: event.target.value});
  }
  handleSol = (event) => {
    console.log("onChange sol", event.target.value);
    this.setState({sol: event.target.value});
  }

  handleClick = (event) =>{
    let cam = this.state.camera;
    let rove = this.props.rover;
    let num = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    console.log("onClick url", imageUrl);
    this.props.newApiUrl(imageUrl)
  }

  render() {
    return (
      <div className="d-flex flex-column bg-dark rover-form ">
      <form className="d-flex justify-content-around mt-3">
        <div className="d-flex col-3 justify-content-around bg-light rounded text-dark align-items-baseline">
          <label className="m-auto" htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} className="custom-select m-auto" id="rover">
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
        </div>
        <div className="d-flex col-3 justify-content-around bg-light rounded text-dark align-items-baseline">
          <label className="m-auto" htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} className="custom-select m-auto" id="camera">
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
        </div>
        <div className="d-flex col-4 justify-content-around form-control bfh-number align-items-baseline">
          <label className="m-auto" htmlFor="sol ">Martian Sol: 1000-2000</label>
          <input onChange={this.handleSol} className="form-control col-6" type="number" max="2000" min="1000"/>
        </div>
      </form>
      <GetImageButton
        onClick={this.handleClick}
//You want to make sure the onClick is getting the entire state to fill submit!!!!
      />
      </div>
    )
  }
}
