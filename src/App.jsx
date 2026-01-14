import { useState } from 'react';
import GridCard from './components/gridCard';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const URL = "https://pokeapi.co/api/v2";

function App() {

  const cards = []

  for(let i=1; i<10; i++) {
            cards.push(
              <GridCard name={"Pokemon"} idNum={i}/>
            )
          }

  return (
    <>
      <Header/>
      <main>
        <h2>All Pokemons</h2>
        <div className='grid'>
          {cards}
        </div>
        {/* <GridCard name={"Pikachu"} idNum={"001"}/>
        <GridCard name={"Raichu"} idNum={"002"}/>
        <GridCard name={"Charizard"} idNum={"003"}/>
        <GridCard name={"Greninja"} idNum={"004"}/> */}
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
