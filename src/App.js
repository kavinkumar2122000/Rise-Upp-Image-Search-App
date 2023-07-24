import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [secondSearchQuery, setSecondSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSecondSearchChange = (event) => {
    setSecondSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // For demonstration purposes, let's clear the search input after clicking "Search"
    setSearchQuery('');
  };

  const handleSecondSearchSubmit = () => {
    if (secondSearchQuery.trim() !== '') {
      // For demonstration purposes, let's clear the search input after searching
      setSecondSearchQuery('');
    }
  };

  const handleBoxClick = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    setLoading(true);
    // Simulating image fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchQuery]);

  return (
    <div className="app">
      <header>
        <h1>RiseUpp Image Search</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="search-icon" onClick={handleSearchSubmit}>
            {/* Add your search icon here, for example: */}
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <button onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
        <div className="boxes-container">
          <div className="box" onClick={() => handleBoxClick('Mountain')}>
            Mountain
          </div>
          <div className="box" onClick={() => handleBoxClick('Flower')}>
            Flower
          </div>
          <div className="box" onClick={() => handleBoxClick('Beach')}>
            Beach
          </div>
          <div className="box" onClick={() => handleBoxClick('Cities')}>
            Cities
          </div>
        </div>
      </header>
      <div className="search-box-left">
        <input
          type="text"
          placeholder="Search another category..."
          value={secondSearchQuery}
          onChange={handleSecondSearchChange}
        />
        <span className="search-icon" onClick={handleSecondSearchSubmit}>
          {/* Add your search icon here, for example: */}
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <button onClick={handleSecondSearchSubmit}>
          Search
        </button>
      </div>
      <ImageGrid searchQuery={searchQuery} loading={loading} />
    </div>
  );
}

export default App;