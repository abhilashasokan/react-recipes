import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import RecipiesList from './RecipiesList/RecipiesList.js';
import RecipieDetails from './RecipieDetails/RecipieDetails.js';

require('dotenv').config();

const App = () => (
  <div className="App">
    <Header />
    <main style={{display: 'flex'}}>
      <RecipiesList style={{ flex: 3 }}/>
      <RecipieDetails  style={{ flex: 5 }}/>
    </main>
  </div>
)

export default App;
