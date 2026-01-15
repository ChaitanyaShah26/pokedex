import './LoadMore.css';

const LoadMoreButton = ({ onClick, loading }) => {
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <button onClick={onClick} disabled={loading} className="load-more-btn" >
        {loading ? "Loading..." : "Load More Pokémon"}
      </button>
    </div>
  );
};

export default LoadMoreButton;