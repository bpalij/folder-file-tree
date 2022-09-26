// import logo from './logo.svg';
import React from "react";
import data from './data/data';
import './App.css';

const Tree = React.lazy(() => import('./components/Tree'));
class App extends React.Component {
  render () {
    return <Tree data={data} />
  }
}

export default App;
