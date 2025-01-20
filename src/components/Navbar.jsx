import React, { useState } from 'react';

    function Navbar({ onSearch, toggleSidebar }) {
      const [query, setQuery] = useState('');

      const handleChange = (event) => {
        setQuery(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
      };

      return (
        <nav className="navbar">
          <div className="navbar-content">
            <div className="hamburger" onClick={toggleSidebar}>
              <span />
              <span />
              <span />
            </div>
            <span style={{marginLeft: '10px', fontSize: '1.2rem'}}>Music</span>
            <form onSubmit={handleSubmit} style={{marginLeft: '20px'}}>
              <input
                type="text"
                placeholder="Search for music..."
                value={query}
                onChange={handleChange}
              />
            </form>
          </div>
        </nav>
      );
    }

    export default Navbar;
