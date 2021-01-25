import React from 'react';
import './App.css';
import SortingVisualizer from './Components/SortingVisualizer/Visualizer';
import Navbar from './Components/Navbar/Navbar';

function App() {

  var [randomRender] = React.useState(false);

  return (
    <div className="App">
      <Navbar randomRender={randomRender}/>
      <SortingVisualizer randomRender={randomRender} />
    </div>
  );
}

export default App;
