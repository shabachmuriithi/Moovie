
import { useState } from 'react';

const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query || '');
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        borderBottom: '2px solid #f1c40f',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '24px' }}>MooVie</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '5px 15px', backgroundColor: '#f1c40f', border: 'none', color: '#000', cursor: 'pointer' }}
        >
          Search
        </button>
        <a href="#" style={{ color: '#f1c40f', marginLeft: '15px' }}>Home</a>
        <a href="#" style={{ color: '#f1c40f', marginLeft: '15px' }}>My List</a>
        <a href="#" style={{ color: '#f1c40f', marginLeft: '15px' }}>Sign In</a>
      </div>
    </header>
  );
};

export default Header;