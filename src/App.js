import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import FaceRecognition from './components/faceRecognition/FaceRecognition.jsx'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageLink: '',
      boxes: [],
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('inputLink')
    const inputValue = input.value
    this.setState({ imageLink: inputValue, boxes: [] })

    var myHeaders = new Headers();
    myHeaders.append("name", "salva");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "imageLink":  inputValue});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/getImage", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({ boxes: result.outputs[0].data.regions })
      })
      .catch(error => console.log('error en la imagen', error));

  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig} />
        <Navigation />
        <Rank />
        <ImageLinkForm onSubmit={this.onSubmit} />
        <FaceRecognition imageLink={this.state.imageLink} boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;
