import React from 'react';
import Header from '../Include/Header';
import Footer from '../Include/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import CreatePic from './CreatePic/CreatePic';


const MainIndex = () => {
    return (
        <>
        <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="createpic" element={<CreatePic/>}/>
            </Routes>
        <Footer/>
        </>
    );
};

export default MainIndex;