import './GridCard.css';
import {TYPES_COLORS} from '../constants.jsx';



function GridCard({pokemon})
{   
    const PokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const PokeId = pokemon.id;
    const image = pokemon.image;
    const type1 = pokemon.types[0].charAt(0).toUpperCase() + pokemon.types[0].slice(1);
    const type2 = pokemon.types[1] && pokemon.types[1].charAt(0).toUpperCase() + pokemon.types[1].slice(1);
    const typeColor1 = TYPES_COLORS[type1?.toLowerCase()]
    const typeColor2 = type2 ? TYPES_COLORS[type2.toLowerCase()]:null;

    return (
    <>
        <div className='pokemon-card'>
            <div className='corner-circle' style={{backgroundColor: typeColor1}}></div>
            <h4>#{PokeId}</h4>
            <img src={image} alt={PokemonName}></img>
            <p>{PokemonName}</p>
            <div className='types'>
                <span style={{backgroundColor: typeColor1}}>
                    {type1}
                </span>
                {type2 && (
                <span style={{ backgroundColor: typeColor2 }}>
                    {type2}
                </span>
                )}
            </div>
        </div>
    </>
    );
}

export default GridCard;