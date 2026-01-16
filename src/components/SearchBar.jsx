import "./SearchBar.css";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}