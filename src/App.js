import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig}/>
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
