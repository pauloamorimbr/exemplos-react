import React from "react";
import { useState } from "react";
import useNameBreaker from "./useNameBreaker";

export default function StateGlobal() {

  const [fullName, setFullName] = useState('');
  const { firstName, lastName } = useNameBreaker(fullName);
 
  return (
    <div className="container">
      <h1>Custom Hook</h1>
      <div><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
      <div>Name: {fullName}</div>
      <div>First: {firstName}</div>
      <div>Last: {lastName}</div>
    </div>
  );
}
