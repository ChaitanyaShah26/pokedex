import './Header.css';
import SearchBar from './SearchBar';

function Header({searchTerm, onSearchChange})
{    

    return (
    <>
        <header>
            <div id='header-logo'>
                <img src="./pokedex.png"></img>
                <p>Pokédex</p>
            </div>
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
            />
        </header>
    </>
    )
}

export default Header;