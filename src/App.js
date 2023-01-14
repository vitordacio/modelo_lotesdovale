import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './components/pages/Home';
import Details from './components/pages/Details';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
