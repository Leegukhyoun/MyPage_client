import './App.scss';
import FrontDoor from './components/Front/FrontDoor';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Include/Header'
import Footer from './components/Include/Footer'
import MainIndex from './components/Main/MainIndex';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FrontDoor />} />
        <Route path="/mainindex" element={<MainIndex />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
