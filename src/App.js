import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import TopBlock from "./components/topBlock/TopBlock";
import AboutMe from "./components/aboutMe/AboutMe";
import Users from "./components/users/Users";
import Registration from "./components/registration/Registration";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <TopBlock/>
            <AboutMe/>
            <Users/>
            <Registration/>
            <Footer/>
        </div>
    );
}

export default App;
