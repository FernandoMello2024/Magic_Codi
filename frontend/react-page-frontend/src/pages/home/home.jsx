import React from 'react';
import { Header } from "../header/header.jsx";

import "./home.css"

export function Home(){

    return (
      <>
        <div className='container'>
        
          <div class='texto'>
           <h1>INOVAÇÃO DIGITAL E PERSONALIZADA PARA O SEU <span className="purple-text">SUCESSO</span></h1>
          
           <p>
            Não é apenas sobre desenvolvimento de software, é sobre envolvimento! Buscamos entender suas necessidades nos mínimos detalhes para oferecer soluções que realmente façam sentido, desde o primeiro contato até a entrega final.
           </p>
          </div>
  
           
          <div className="image">
           <img src="../images/home.jpeg" alt="Os profissionais da empresa reunidos em uma mesa" />
          </div>
  
          <div className='botão'>
           <input type="button" value="Acesse" />
          </div>

           
        </div>  

          
      </>
    )
}



   




