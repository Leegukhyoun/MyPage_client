import './App.scss';
import FrontDoor from './components/Front/FrontDoor';
import { Routes, Route } from 'react-router-dom';
import MainIndex from './components/Main/MainIndex';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<FrontDoor/>}/>
          <Route path="/mainindex/*" element={<MainIndex/>}/>
        </Routes>
    </div>
  );
}

export default App;
