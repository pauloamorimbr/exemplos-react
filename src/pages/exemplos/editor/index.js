import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h1>Editor DraftJS</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue} style={{height: '400px'}} />
      <div dangerouslySetInnerHTML={{ __html: value}} ></div>
    </div>
  );
}
