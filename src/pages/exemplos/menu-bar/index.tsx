import { useState } from "react";

export default function ExemploMenuBar() {
  
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="countries-list">
            <div className="country">Brasil</div>
            <div className="country">Argentina</div>
            <div className="country">Chile</div>
            <div className="country">Uruguai</div>
            <div className="country">Paraguai</div>
            <div className="country">Bolívia</div>
            <div className="country">Peru</div>
            <div className="country">Venezuela</div>
            <div className="country">Colômbia</div>
            <div className="country">Equador</div>
            <div className="country">Guiana</div>
            <div className="country">Suriname</div>
            <div className="country">Guiana Francesa</div>
            <div className="country">Panamá</div>
            <div className="country">Costa Rica</div>
            <div className="country">Nicarágua</div>
            <div className="country">Honduras</div>
            <div className="country">El Salvador</div>
            <div className="country">Guatemala</div>
          </div>
        </div>
        <div className="content">
          CONTEUDO
        </div>
      </div>
      <style jsx>
        {`
        .container {
          display: flex;
          flex-direction: row;
          height: 100vh;
          width: 100vw;
        }

        .menu {
          width: 20vw;
          height: 100vh;
          background-color: #f00;
          overflow: auto;
        }

        .countries-list {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }

        .countries-list > div {
          padding: 40px;
          cursor: pointer;
          background-color: #f90;
          margin-bottom: 10px;
        }

        .content {
          flex: 1;
          
          background-color: #00f;
          color: #fff;
          padding: 10px;
        }

        `}
      </style>
    </>
  );
}
