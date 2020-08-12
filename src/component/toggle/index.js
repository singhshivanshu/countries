import React, { useState, useCallback } from "react";
import "./style.css";

function Toggle() {
  const [check, setCheck] = useState(false);

  const handleChange = useCallback(() => setCheck(!check),[check]);

  let app = document.querySelector(".App");
  let heading = document.querySelectorAll(".heading");

  if (app) {
    app.style.background = check ? "#202c37" : "#fff";
  }

  if (heading) {
    [...heading].map((head) => (head.style.color = check ? "#fff" : "#111517"));
  }

  console.log(heading);
  console.log(check);
  return (
    <label className="switch">
      <input type="checkbox" checked={check} onChange={handleChange} />
      <span className="slider round"></span>
    </label>
  );
}

export default Toggle;
