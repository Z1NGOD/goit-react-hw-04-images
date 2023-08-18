import React, { useState } from 'react';
import { Header, Form, Input, Button } from './Searchbar.styled';

function SearchBar({  onSearchQueryChange }) {
  const [query, setQuery] = useState(''); 

  const handleSearch = e => {
    const normalizedQuery = e.currentTarget.value.trim().toLowerCase();
    setQuery(normalizedQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearchQueryChange(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleSearch}
        />
        <Button>Search</Button>
      </Form>
    </Header>
  );
}

export default SearchBar;
