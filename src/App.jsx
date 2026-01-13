import { useState } from 'react';
import GridCard from './components/gridCard';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <Header/>
      <main>
        <GridCard name={"Pikachu"} idNum={"001"}/>
        <GridCard name={"Raichu"} idNum={"002"}/>
        <GridCard name={"Charizard"} idNum={"003"}/>
        <GridCard name={"Greninja"} idNum={"004"}/>
      </main>
      <footer>
        Made by&nbsp;  
          <a href="https://github.com/ChaitanyaShah26" target="_blank">
            @ChaitanyaShah26 <FontAwesomeIcon icon={faGithub} />
          </a>
      </footer>
    </>
  )
}

export default App;
