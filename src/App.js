import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

export default function App() {

  return (
    <div className="body">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}