import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json'

class App extends React.Component {

  constructor(){
    super();
    this.state={
      input:'',
      imageLink: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.input)
    this.setState({imageLink: this.state.input})
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig}/>
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} imageLink={this.state.imageLink}/>
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
