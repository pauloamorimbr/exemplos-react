import React from "react";
import { useState } from "react";
import { useTesteGlobal } from "./useTesteGlobal";

export default function StateGlobal() {
  const [value, setValue] = useState("");
  const { globalValue, setGlobalValue } = useTesteGlobal();

  return (
    <div className="container">
      <h1>Global State</h1>
      <div>{value}</div>
      <div>{globalValue}</div>
      <button onClick={() => setValue("Olá")}>Olá</button>
      <button onClick={() => setValue("OlÉ")}>Olé</button>
      <button onClick={() => setValue("BLABLA")}>BlaBLa</button>
      <button onClick={() => setGlobalValue("OK 1")}>OK 1</button>
      <button onClick={() => setGlobalValue("OK 2")}>OK 2</button>
      <hr />
      <Componente2 />
      <Componente3 />
    </div>
  );
}

function Componente2() {
  const { globalValue, setGlobalValue } = useTesteGlobal();
  return <div>Componente 2 - {globalValue}</div>;
}

function Componente3() {
  const { globalValue, setGlobalValue } = useTesteGlobal();
  return <div>Componente 3 - {globalValue}</div>;
}
