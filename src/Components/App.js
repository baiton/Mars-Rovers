import React, {Component} from 'react';
import '../Styles/App.css';
import getPictures from '../services'
import GetImageForm from './GetImageForm'
import ImageDisplay from './ImageDisplay'

class App extends Component {
  constructor() {
    super()
    this.state={
      rover: "Curiosity",
      photos: []
    }
  }
  handleRoverSelection = (roverName) => {
    this.setState({rover: roverName.rover})
  }

  handleNewApiUrl = (newApiUrl) =>{
    getPictures(newApiUrl).then((response) => {
      console.log(response.data.photos);
      this.setState({photos: response.data.photos})
    })
  }



  render() {
    return (
      <div className="App">
        <GetImageForm
          roverSelection = {this.handleRoverSelection}
          rover= {this.state.rover}
          newApiUrl = {this.handleNewApiUrl}
        />
        <h1 className="d-flex justify-content-center">{this.state.rover}</h1>
        <div className="row d-flex justify-content-around">
          {this.state.photos.map((photoArr) =>{
            return(
              <ImageDisplay
                  key={photoArr.id}
                  photo={photoArr.img_src}
                />
            )
          })}
        </div>
        {/*The ImageDisplay Component needs some work with events and Methods  */}
      </div>
    );
  }
}

export default App;
