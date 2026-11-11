import React from 'react';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import FraseDisplay from './componentes/FraseDisplay';
import Frases from './Objeto/Frases';
import Colores from './Objeto/Colores';
import logo from './img/frp-logo.png';

function App() {

  const [num, setNum] = useState(0);

  const [numColor, setColor] = useState(0);

  const [contador, setContador] = useState(1);

  const Randomer = (max) => Math.floor(Math.random() * max);
// Obtiene el número total de frases y colores
  const totalFrases = Object.keys(Frases).length;

  const totalColores = Object.keys(Colores).length;
// Función para cambiar la frase y el color
  const clickSiguienteFrase = () => {
    // FRACE
    let nuevoNumero;

    do {
        nuevoNumero =
            Randomer(totalFrases);
    } while (nuevoNumero === num);

    setNum(nuevoNumero);
    console.log(
        "Frase anterior:", num,
        "Nueva frase:", nuevoNumero);

    // COLOR
    let nuevoNumeroColor;

    do {
        nuevoNumeroColor =
            Randomer(totalColores);
    } while (nuevoNumeroColor === numColor);

    setColor(nuevoNumeroColor);
    console.log(
        "Color anterior:", numColor,
        "Nuevo color:", nuevoNumeroColor 
    );
    // Contador de frases
    setContador(contador + 1);
    console.log("Frases mostradas:", contador);
  };
  //Twittear ( Recordar cambiar por X )
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
          <h1 className="text-primary text-center col-md-4">Frases de Axel</h1>
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
              style={{ color: Colores[numColor] }}/> 
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
                <p id="contador">Frases vistas: {contador}</p>
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
