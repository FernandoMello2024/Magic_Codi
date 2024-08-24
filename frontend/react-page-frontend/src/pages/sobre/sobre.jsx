import React from 'react';

function Sobre() {
    return (
        <div className="container">
      <h1>Sobre Nós</h1>
      
      <div className="texto">
        <p className="texto-cima">
          Somos uma empresa de Software que nasceu para ir além de “apenas entregar um projeto”. Criamos uma estrutura operacional baseada em organização, agilidade, transparência, colaboração e metodologias ágeis bem definidas.
        </p>
        <p className="texto-baixo">
          Não é sobre desenvolvimento, é sobre o real envolvimento. É sobre idealizar e lapidar, não “apenas entregar”. É sobre contribuir diretamente para que o potencial máximo de cada projeto seja explorado!
        </p>
      </div>

      <div className="image-text-container">
        <div className="image">
          <img src="../images/nos.jpeg" alt="Os profissionais da empresa reunidos mostrando um certificado" />
        </div>
        
        <div className="texto-lateral">
          <p className="texto-lateral-cima">
            É com grande satisfação que nos destacamos como uma referência incontestável no mercado de tecnologia. Desde a sua fundação, a Magic tem continuamente superado expectativas e estabelecido novos padrões de excelência e inovação.
          </p>
          <p className="texto-lateral-baixo">
            Com uma visão estratégica e um compromisso inabalável com a qualidade, a Magic não apenas conquistou uma posição de liderança, mas também influenciou positivamente o setor de desenvolvimento de software. Seus produtos e serviços excepcionais não apenas atendem às necessidades dos clientes, mas também definem tendências e inspiram concorrentes.
          </p>
        </div>
      </div>
    </div>
  );
};

    )
}



