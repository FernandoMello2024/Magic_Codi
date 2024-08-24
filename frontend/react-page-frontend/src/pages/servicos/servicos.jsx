export function Servicos() {
    return (
        <>
        <h1 className="titulo-servicos">Serviços</h1>
        <div className="container">
          
          {/* Primeira seção: texto à esquerda e imagem à direita */}
          <div className="section">
            <div className="texto-top-esquerdo">
              <h1>Desenvolvimento Web</h1>
              <p>
                Na nossa empresa, o desenvolvimento web vai além do simples código. Combinamos <strong>inovação</strong> e <strong>eficiência</strong> para criar soluções digitais que impulsionam o sucesso do seu negócio. Cada projeto é uma oportunidade para transformar ideias em experiências online incríveis. No mundo digital de hoje, seu site precisa ser acessível a todos, em qualquer dispositivo. Criamos sites responsivos que oferecem uma experiência de usuário consistente e agradável, independentemente do dispositivo utilizado. A acessibilidade é nossa prioridade. Seja qual for o tamanho do seu negócio, estamos prontos para criar soluções web que impulsionem seu crescimento. De startups a grandes empresas, nossa abordagem personalizada garante que cada projeto seja uma ferramenta poderosa para alcançar seus objetivos.
              </p>
            </div>
            <div className="image-top-direito">
              <img src="../images/topdireito.jpeg" alt="Imagem relacionada ao desenvolvimento web" />
            </div>
          </div>
  
          {/* Segunda seção: imagem à esquerda e texto à direita */}
          <div className="section">
            <div className="image-meio-esquerdo">
              <img src="../images/meioesquerdo.jpeg" alt="Imagem relacionada ao desenvolvimento mobile" />
            </div>
            <div className="texto-meio-direito">
              <h1>Desenvolvimento Mobile</h1>
              <p>
                Criamos aplicativos móveis sob medida para seu negócio, garantindo que cada detalhe seja alinhado às suas metas. Desde a concepção até o lançamento, nosso foco é entregar uma experiência móvel que engaja e encanta seus usuários. Mais do que desenvolvedores, somos seus parceiros na transformação digital. Juntos, vamos criar aplicativos móveis que não só atendem às necessidades atuais, mas que também estão preparados para evoluir com as demandas do mercado. <strong>Performance</strong> é tão importante quanto a aparência. Criamos aplicativos que são rápidos, <strong>responsivos</strong> e esteticamente agradáveis, garantindo que seus usuários tenham uma experiência de alta qualidade em todos os aspectos.
              </p>
            </div>
          </div>
  
          {/* Terceira seção: texto à esquerda e imagem à direita */}
          <div className="section">
            <div className="texto-baixo-esquerdo">
              <h1>Desenvolvimento Desktop</h1>
              <p>
                Você traz a visão, nós trazemos o código. Trabalhamos juntos para criar aplicações desktop que reflitam exatamente o que seu negócio precisa, com <strong>tecnologia</strong> de ponta e um foco inabalável na <strong>qualidade</strong> e na eficiência. Desenvolvemos aplicações desktop robustas e eficientes, projetadas para potencializar as operações do seu negócio. Nossas soluções são personalizadas para atender às suas necessidades específicas, garantindo performance e <strong>confiabilidade</strong>. Desenvolvemos softwares para facilitar seu dia a dia, oferecendo soluções que automatizam processos, aumentam a produtividade e melhoram a gestão das suas operações. Cada aplicação é pensada para simplificar e otimizar.
              </p>
            </div>
            <div className="image-baixo-direito">
              <img src="../images/baixodireito.jpeg" alt="Imagem relacionada ao desenvolvimento desktop" />
            </div>
          </div>
  
          <div className="linha"></div>
  
          <div className="texto-inferior">
            <p>No segundo semestre de 2023, o estúdio Magic desenvolveu projetos para as empresas Embrapa e Zencheck.</p>
          </div>
  
          <div className="images-inferior">
            <img src="../images/embrapa.jpeg" alt="Projeto da Embrapa" />
            <img src="../images/zencheck.jpeg" alt="Projeto da Zencheck" />
          </div>
        </div>
      </>
    );
  };
  
