import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div>
        <h2>Beer List</h2>
        {beers.map((beer: Beer) =>
          <div key={beer.id}>
            {beer.name}
          </div>
        )}
      </div>
    </div>
  );
  }
  componentDidMount() {
  this.setState({isLoading: true});

 /* fetch('http://ec2-54-227-226-98.compute-1.amazonaws.com:4212/good-beers') */
    fetch('http://127.0.0.1:4212/good-beers')
    .then(response => response.json())
    .then(data => this.setState({beers: data, isLoading: false}));
  }
}

export default App;
