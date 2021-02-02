import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import FaceRecognition from './components/faceRecognition/FaceRecognition.jsx'
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import { mainURL } from './environent';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageLink: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('inputLink')
    const inputValue = input.value
    this.setState({ imageLink: inputValue, boxes: [] })

    var myHeaders = new Headers();
    myHeaders.append("name", "salva");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "imageLink": inputValue,
      "id": this.state.user.id
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(mainURL + "getImage", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.loadUser(result[0])
        this.setState({ boxes: result[1].outputs[0].data.regions })
      })
      .catch(error => console.log('error en la imagen', error));

  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({
        isSignedIn: true
      })
    } else if (route === 'signin' || route === 'register') {
      this.setState({
        user: {},
        isSignedIn: false
      })
    }
    this.setState({
      route: route
    })
  }

  componentDidMount() {
    fetch(mainURL)
      .then(response => response.json())
      .then(console.log)
      .catch(err => console.log(err))
  }

  render() {
    const { isSignedIn, boxes, imageLink } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesConfig} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { this.state.route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          : (
            this.state.route === 'register' ?
              <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              :
              <div>
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
                <ImageLinkForm onSubmit={this.onSubmit} />
                <FaceRecognition imageLink={imageLink} boxes={boxes} />
              </div>
          )
        }
      </div>
    );
  }
}

export default App;
