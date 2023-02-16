import React, { createContext } from "react";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function StateGlobalCtx() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h1>Global State</h1>
      <div>{value}</div>
      <button onClick={() => setValue("Olá")}>Olá</button>
      <button onClick={() => setValue("OlÉ")}>Olé</button>
      <button onClick={() => setValue("BLABLA")}>BlaBLa</button>
      <hr />
      <GlobalContext.Provider value={{ value, setValue }}>
        <Componente2 />
        <Componente3 />
      </GlobalContext.Provider>
    </div>
  );
}

function Componente2() {
  const { value } = React.useContext(GlobalContext);
  return <div>Componente 2 - {value}</div>;
}

function Componente3() {
  const { value, setValue } = React.useContext(GlobalContext);
  return (
    <div>
      <div>Componente 3 - {value}</div>
      <button onClick={() => setValue("MUDAMUDA")}>MUDA</button>
    </div>
  );
}
