import { useEffect, useState } from "react";

let globalValue = "";

export const useTesteGlobal = () => {
  const [gValue, setGValue] = useState("");

  const setGlobalValue = (value) => {
    globalValue = value;
    setGValue(value);
  };

  useEffect(() => {
    let intId
    const checkVal = () => {
      if( gValue !== globalValue ) {
        setGValue(globalValue);
      }
      intId = requestAnimationFrame(checkVal);
    }
    checkVal();

    return () => {
      cancelAnimationFrame(intId);
    }
  }, [gValue]);

  return {
    globalValue: gValue,
    setGlobalValue,
  };
};
