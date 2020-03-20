import React from 'react';
import logo from './asylum-advice-logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';

export default function App() {
  return <>
    <MetaTags> /** https://material-ui.com/getting-started/usage/#responsive-meta-tag */
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </MetaTags>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AsylumAdvice
        </p>
      </header>
    </div>
  </>
}
