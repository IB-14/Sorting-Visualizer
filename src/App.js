import React from 'react';
import './App.css';
import SortingVisualizer from './Components/SortingVisualizer/Visualizer';
import Footer from './Components/Footer/Footer';

function App() {

  var [randomRender] = React.useState(false);

  return (
    <div className="App">
      <SortingVisualizer randomRender={randomRender} />
      <Footer />
    </div>
  );
}

export default App;
