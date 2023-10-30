import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("old");

  console.log("body rendered");

  useEffect(() => {
    console.log("calling  API");
    setName("new");
  }, []);
  return (
    <main>
      <h4>{name}</h4>
    </main>
  );
}
