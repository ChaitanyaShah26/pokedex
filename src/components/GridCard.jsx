import './GridCard.css';

function GridCard({name, idNum})
{
    const PokemonName = name;
    const PokeId = idNum;

    return (
    <>
        <div className='pokemon-card'>
            <div className='corner-circle'></div>
            <h4>#{PokeId}</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZz7bEAtF3hDL0MgUoTWQ1FMC6OisPj2MK9A&s"></img>
            <p>{PokemonName}</p>
            <div className='types'>
                <span>Type 1</span>
                <span>Type 2</span>
            </div>
        </div>
    </>
    );
}

export default GridCard;

