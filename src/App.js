import React, { useState } from 'react';
import './App.css';

const logo = require('./header_img.png');
const bg_img_skelbimai_new = require('./nauji-skelbimai.jpg');
const bg_img_skelbimai_hot = require('./karsti-skelbimai.jpg');

const new_skelbimai = 0;
const hot_skelbimai = 0;


function App() {

  const [input, setInput] = useState('');
  const [skelbimai, setSkelbimai] = useState([]);

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function addSkelbimas() {
    setSkelbimai([...skelbimai, input]);
  }
  
  return (
    <div className="App">
      <nav className="navBar">
        <h1>LOGO</h1>
        <div>
          <button className="nav_btn">Pagrindinis</button>
          <button className="nav_btn" href="">Skelbimai</button>
          <button className="nav_btn" href="Skelbimai.js">Pagalba</button>
        </div>
      </nav>
      <header className="app-header">
        <div className="header_text">
          <h1>Skelb.lt - Skelbimai tik tau!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Arcu non odio euismod lacinia. Interdum consectetur libero id faucibus nisl tincidunt. Arcu non odio euismod lacinia. Interdum consectetur libero id faucibus nisl tincidunt. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="header_image">
          <img src={logo} alt="Header"/>
        </div>
      </header>
      <section className="section_skelbimai">
        <h1 className="section_skelbimai_h1">Skelbimų rekomendacijos</h1>
        <div className="skelbimai">
          <div className="nauji_skelbimai">
            <h1>Naujų skelbimų: {new_skelbimai}</h1><img src={bg_img_skelbimai_new} alt="bg_img_skelbimai"></img>
          </div>
          <div className="karsti_skelbimai">
            <h1>Karštų skelbimų: {hot_skelbimai}</h1><img src={bg_img_skelbimai_hot} alt="bg_img_skelbimai"></img>
          </div>
        </div>
      </section>
      <section className="skelbimaiList">
        <h1>Sukurkite naują skelbimą</h1>
        <div className="skelbimu_input">
          <input 
            placeholder="Įrašykite skelbimo pavadinimą"
            value={input}
            onChange={handleInputChange}
            name="skelbimas"
            type="text"
          />
          <button className="addSkelbimas_btn" onClick={addSkelbimas}>+</button>
        </div>
        <ul>
          <h1>Skelbimų Sąrašas</h1>
          
        </ul>
      </section>
    </div>
  );
}

export default App;
