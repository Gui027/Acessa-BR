import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Footer from './components/Footer';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

// fznd modificações

ReactDOM.render(
  <div className="main__container">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
    <Footer />

  </div>,
  document.getElementById('root')
);

