import React, { useState } from 'react';

function Search({ setSearchResults }) {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search your location and hit Enter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
