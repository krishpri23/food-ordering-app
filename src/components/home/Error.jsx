import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <main>
      <h3> Page not found! </h3>
      <p> {error.data} </p>
    </main>
  );
}
