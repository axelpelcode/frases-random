import React from 'react';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import FraseDisplay from './componentes/FraseDisplay';
import Frases from './Objeto/Frases';
import logo from './img/frp-logo.png'

function App() {

  const [num, setNum] = useState(0);

  const Randomer = (max) => Math.floor(Math.random() * max);

  const clickSiguienteFrase = () => {
   setNum(
    (num * 0) + Randomer(26)
    )
    console.log(num);
  }

  const clickTwittear = () => {
   console.log("Twittear frase");
  }
  return (

    <div className="App" >
      <div className="container-fluid">
        <div className="row">
            
          <div className="col-md-3" />
          <img 
            className="img-responsive col-md-1"
            src={logo} 
            title="Frases random para twittear"
            alt="Preciona 'Nueva frase' para generar una frase aleatoria
             o 'Twittear' para publicalra."
          />
          <h1 className="text-primary text-center col-md-4">Frases random</h1>
          <img 
            className="img-responsive col-md-1"
            src={logo} 
            title="Frases random para twittear"
            alt="Preciona 'Nueva frase' para generar una frase aleatoria
             o 'Twittear' para publicalra."
          />
          <div className="col-md-3" />

          <div className="col-md-2" />  
          <div id="quote-box" className="col-md-8" >
            < FraseDisplay 
              fraseSelect={Frases[num]}
            /> 
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-2">
            <Boton 
              claseBoton="btn btn-block btn-primary"
              idBoton="new-quote"
              nombreBoton="Nueva frase" 
              clickEfecto={clickSiguienteFrase} 
            />
            </div>
            <div className="col-md-2">
            <Boton 
              claseBoton="btn btn-block btn-info"
              idBoton="tweet"
              nombreBoton= {<a 
                id="tweet-quote"
                href={`http://twitter.com/intent/tweet?text="${Frases[num][0]}" - ${Frases[num][1]}`} 
                target="_blank"
                rel="noreferrer"
                >
                Twittear <i className="fab fa-twitter" />
                </a>} 
              clickEfecto={clickTwittear} 
            />
            </div>
            <div className="col-md-4"/>
            </div>
          </div>
          <div className="col-md-2" />

        </div>
        
          
        <div className="text-center col-md-12">
          <footer >
            <a id="contacto" href="https://github.com/axelpelcode" target="_blank" rel="noreferrer">
              by AxelPelCode
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App;
