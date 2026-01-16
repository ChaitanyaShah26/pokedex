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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

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


  useEffect(() => {
    if (!searchTerm) {
      setSearchResult(null);
      return;
    }

    const found = pokemonList.find(
      (p) => p.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setSearchResult(found);
    } else {
      const fetchSinglePokemon = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`${URL}/pokemon/${searchTerm.toLowerCase()}`);
          if (!res.ok) throw new Error("Pokémon not found!");
          const details = await res.json();
          const pokemonData = {
            id: details.id,
            name: details.name,
            types: details.types.map((t) => t.type.name),
            image: details.sprites.other["official-artwork"].front_default,
          };
          setSearchResult(pokemonData);
        } catch (err) {
          setSearchResult(null);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchSinglePokemon();
    }
  }, [searchTerm, pokemonList]);

  const displayList = searchResult ? [searchResult] : pokemonList;


  return (
    <>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <main>
        <h2>All Pokemons</h2>

        <div className='grid'>
          {displayList.map((pokemon) => (
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
