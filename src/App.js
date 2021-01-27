import React from 'react';
import './App.css';
import SortingVisualizer from './Components/SortingVisualizer/Visualizer';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {

  var [randomRender] = React.useState(false);

  return (
    <div className="App">
      <Navbar randomRender={randomRender}/>
      <SortingVisualizer randomRender={randomRender} />
      <Footer />
    </div>
  );
}

export default App;
