import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ userSearch }) => {
    const [text, setText] = useState("");

    const userTypedText = (e) => {
        userSearch(e.target.value);
    };

    const sendText = () => {};

    return (
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Znajdź..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={userTypedText}
    />
  </InputGroup>
    );
}

export default SearchBar;