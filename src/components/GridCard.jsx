import './GridCard.css';
import {TYPES_COLORS} from '../constants.jsx';

function GridCard({name, idNum, type1, type2})
{
    const PokemonName = name;
    const PokeId = idNum;
    const typeColor1 = TYPES_COLORS[type1.toLowerCase()]
    const typeColor2 = TYPES_COLORS[type2.toLowerCase()]

    return (
    <>
        <div className='pokemon-card'>
            <div className='corner-circle' style={{backgroundColor: typeColor1}}></div>
            <h4>#{PokeId}</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZz7bEAtF3hDL0MgUoTWQ1FMC6OisPj2MK9A&s"></img>
            <p>{PokemonName}</p>
            <div className='types'>
                <span style={{backgroundColor: typeColor1}}>
                    {type1}
                </span>
                <span style={{backgroundColor: typeColor2}}>
                    {type2}
                </span>
            </div>
        </div>
    </>
    );
}

export default GridCard;