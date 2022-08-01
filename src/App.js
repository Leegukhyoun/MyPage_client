import './App.scss';
import FrontDoor from './components/Front/FrontDoor';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Include/Header'
import Footer from './components/Include/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FrontDoor />} />
        <Route path="/main/:userId" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
