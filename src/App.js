import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './Components/SortingVisualizer/Visualizer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SortingVisualizer />
    </div>
  );
}

export default App;
