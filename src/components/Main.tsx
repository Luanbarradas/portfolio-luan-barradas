import React from "react";

export const Main = () => (
  <main>
    <section className="container-top-main">
      <div className="text-main-container">
        <h1>desenvolvedor web</h1>
        <h2>
          Em busca de qualificação, enfrentando desafios e trilhando meu próprio
          caminho na área de desenvolvimento.
        </h2>
        <p>
          “O conhecimento não tem limites, assim como a criatividade.” – Maya
          Angelou
        </p>
        <div className="btn-container">
          <button className="btn-default btn-blue">projetos</button>
          <button className="btn-default btn-pink">sobre mim</button>
        </div>
      </div>
      <img src="./img/autoretrato.gif" alt="autoretrato pixelart animado" />
    </section>
    <section className="about-me">
      <div className="about-me-text">
        <h2>sobre mim</h2>
        <p>
          Bem vindo ao meu portfólio, me chamo Luan Barradas. Sou natural de
          Belém do Pará, graduado em Produção Multimídia - UFPA.
        </p>
        <p>Estou em trabalho constante para ser um desenvolvedor Backend.</p>
        <div className="container-btn">
          <button className="btn-default btn-blue">currículo</button>
        </div>
      </div>
      <div className="container-img">
        <img
          src="./img/urso-codando-azul.svg"
          alt="pixelart urso programando"
        />
      </div>
    </section>
  </main>
);
