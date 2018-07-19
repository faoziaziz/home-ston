import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './BeerList';

interface Beer {
  id: string;
  name: string;
}

interface AppProps {
}

interface AppState {
  beers: Array<Beer>;
  isLoading: boolean;
}


class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false
    };
  }

  render() {
     const {beers, isLoading} = this.state;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <BeerList/>
      
    </div>
  );
  }
  componentDidMount() {
  this.setState({isLoading: false});

    fetch('http://ec2-54-227-226-98.compute-1.amazonaws.com:4212/good-beers') 
    .then(response => response.json())
    .then(data => this.setState({beers: data, isLoading: false}));
  }
}

export default App;
