import React from 'react';

// common components
import Header from './views/components/header';
import Footer from './views/components/footer';

// styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// JavaScript libraries
import 'jquery/dist/jquery.min.js';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <h1 className='container'>Hello, World!</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;
