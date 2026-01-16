import { useEffect, useState } from 'react';
import GridCard from './components/GridCard';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaExclamationTriangle } from 'react-icons/fa';
import { TYPES_COLORS } from './constants';
import LoadMoreButton from './components/LoadMore';
import InfoCard from './components/InfoCard';

const URL = "https://pokeapi.co/api/v2";
const LIMIT = 20;

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch (`${URL}/pokemon?limit=${LIMIT}&offset=${offset}`);

      if(!response.ok) {
        throw new Error("Failed to fetch Pokémon List!");
      }

      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();

          return {
            id: details.id,
            name: details.name,
            types: details.types.map((t) => t.type.name),
            image: details.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemonList((prev) => [...prev, ...pokemonDetails]);
      setOffset((prev) => prev + LIMIT);

    }
    catch(err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon();
  },[]);


  return (
    <>
      <Header/>
      <main>
        <h2>All Pokemons</h2>
        
        {/* <InfoCard URL={URL} pokemonName={selectedPokemon} onClose={() => setSelectedPokemon(null)}/> */}

        <div className='grid'>
          {pokemonList.map((pokemon) => (
            <GridCard 
              key={pokemon.id} 
              pokemon={pokemon} 
              onClick={() => setSelectedPokemon(pokemon.name)}
            />
          ))}
        </div>

        {selectedPokemon && (
          <InfoCard
            URL={URL}
            pokemonName={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
        
        {error && <p className="error"> <b><FaExclamationTriangle/> Error</b> <br/> {error}</p>}
        <LoadMoreButton onClick={fetchPokemon} loading={loading}/>

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
