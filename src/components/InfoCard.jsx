import { useEffect, useState } from "react";
import "./InfoCard.css";
import "./GridCard.css";
import { TYPES_COLORS } from "../constants";

function InfoCard({ URL, pokemonName, onClose }) {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonName) return;
    
    const fetchPokemonInfo = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${URL}/pokemon/${pokemonName}`);
        const data = await res.json();

        setPokemon({
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map(t => t.type.name),
          stats: data.stats.map(
            s => (
              {
                name: s.stat.name,
                value: s.base_stat
              }
            )
          )
        }
        );
      }
      catch {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    };
    fetchPokemonInfo();
  },
  [pokemonName, URL]
  );

  if (loading || !pokemon) return null;

  return (
    <>
    <div className="overlay">
        <div className="info-card">
            <button className="close" onClick={onClose}>
              x
            </button>

            <div className="img-panel" style={{ backgroundColor: TYPES_COLORS[pokemon.types[0]] }}>
              <div className="bg-ring"></div>
              <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
              <div className='types'>
                  {pokemon.types.map(type => (
                    <span
                      key={type}
                      style={{ backgroundColor: TYPES_COLORS[type] }}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  ))}
              </div>
              <img src={pokemon.image} alt={pokemon.name}></img>
            </div>
            
            <div className="info-panel">
              <div className="info">
                <p>Height<br/>
                  <span>{pokemon.height} m</span>
                </p>
                <p>Weight<br/>
                  <span>{pokemon.weight} kg</span>
                </p>
              </div>
              
              <div className="stats">
                <h5>Stats</h5>
                 {pokemon.stats.map(stat => (
                    <div className="stat-item" key={stat.name}>
                      <span className="stat-name">{stat.name.replace("-"," ").toUpperCase()}</span>
                      <div className="stat-bar">
                        <div
                          className="stat-value"
                          style={{ "--value": `${stat.value}%`, backgroundColor: TYPES_COLORS[pokemon.types[0]]  }}
                        ></div>
                      </div>
                      <span className="stat-num">{stat.value}</span>
                    </div>
                  ))}

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;