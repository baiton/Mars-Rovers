import React, {Component} from 'react';
import '../Styles/App.css';
import apiFetch from '../services'
import GetImageForm from './GetImageForm'

class App extends Component {
  constructor() {
    super()
  }

  updatePictures = () => {
    apiFetch().then((response) => {
      console.log(response);
      this.setState({pictures: response})
    })
  }

  componentDidMount() {
    this.updatePictures()
  }
  render() {
    return (
      <div className="">
        <GetImageForm/>
        <ImageDisplay/>
        {/*The ImageDisplay Component needs some work with events and Methods  */}
      </div>
    );
  }
}

export default App;
