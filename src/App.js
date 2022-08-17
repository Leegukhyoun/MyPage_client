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
import MainFixed from './components/Main/MainFixed';
import SearchNorMemo from './components/board/SearchNorMemo';
import MyInfo from './components/board/MyInfo';
import PicMemoContainer from './components/board/PicMemoContainer';
import PicMemoCreate from './components/board/PicMemoCreate';
import PicMemoDetail from './components/board/PicMemoDetail';
import PicMemoEdit from './components/board/PicMemoEdit';
import SearchPicMemo from './components/board/SearchPicMemo';

function App() {
  return (
    <div className="App">
      <Header />
      <MainFixed/>
      <Routes>
        <Route path="/" element={<FrontDoor />} />
        <Route path="/mainindex" element={<MainContainer/>} />
        <Route path="/bookmark" element={<BookMarkContainer/>} />
        <Route path="/normemo" element={<NorMemoContainer/>} />
        <Route path="/normemocreate" element={<NorMemoCreate/>} />
        <Route path="/normemodetail/:id" element={<NorMemoDetail/>} />
        <Route path="/normemoedit/:id" element={<NorMemoEdit/>} />
        <Route path="/searchnor/:userid/:title" element={<SearchNorMemo/>} />
        <Route path="/myinfo" element={<MyInfo/>} />
        <Route path="/picmemo" element={<PicMemoContainer/>} />
        <Route path="/picmemocreate" element={<PicMemoCreate/>} />
        <Route path="/picmemodetail/:id" element={<PicMemoDetail/>} />
        <Route path="/picmemoedit/:id" element={<PicMemoEdit/>} />
        <Route path="/searchpic/:userid/:pictitle" element={<SearchPicMemo/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
