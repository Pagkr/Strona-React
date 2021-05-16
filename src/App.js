import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  const[gradFilter, setGradFilter] = useState(null);

  const userSearch = (data) => {
    setGradFilter(data);
  };

  return (
    <>
    <Container>
      <Header />
      <SearchBar userSearch={userSearch} />
      <Catalog filter={gradFilter} />
    </Container>
    <Footer />
  </>
  );
}

export default App;
