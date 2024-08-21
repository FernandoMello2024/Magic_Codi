import React from 'react';
import { Header } from "../header/header.jsx";

import "./home.css"

export function Home(){

    return (
      <>
        <div className='container'>
          <Header/>

          <div className='texto'>
           <h1>INOVAÇÃO DIGITAL E PERSONALIZADA PARA O SEU SUCESSO</h1>
          
           <p>
            Não é apenas sobre desenvolvimento de software, é sobre envolvimento! Buscamos entender suas necessidades nos mínimos detalhes para oferecer soluções que realmente façam sentido, desde o primeiro contato até a entrega final.
           </p>
          </div>

           
          <div className="image">
           <img src="../assets/images/home.jpeg" alt="Os profissionais da empresa reunidos em uma mesa" />
          </div>

          <div className='botão'>
           <input type="button" value="acesse" />
          </div>
        </div>  

          
      </>
    )
}


   




