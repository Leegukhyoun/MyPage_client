import './App.scss';
import FrontDoor from './components/Front/FrontDoor';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Include/Header'
import Footer from './components/Include/Footer'
import MainContainer from './containers/MainContainer';
import BookMarkContainer from './components/board/BookMarkContainer';
import NorMemoContainer from './components/board/NorMemoContainer';
import NorMemoCreate from './components/board/NorMemoCreate';
import NorMemoDetail from './components/board/NorMemoDetail';
import NorMemoEdit from './components/board/NorMemoEdit';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FrontDoor />} />
        <Route path="/mainindex" element={<MainContainer/>} />
        <Route path="/bookmark" element={<BookMarkContainer/>} />
        <Route path="/normemo" element={<NorMemoContainer/>} />
        <Route path="/normemocreate" element={<NorMemoCreate/>} />
        <Route path="/normemodetail/:id" element={<NorMemoDetail/>} />
        <Route path="/normemoedit/:id" element={<NorMemoEdit/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
