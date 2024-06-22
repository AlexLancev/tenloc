import React from "react";
import { Tours } from "../Tours";

const Excursions = () => {
  return (
    <section className="excursions">
      <div className="container">
        <h2 className="excursions__title">Экскурсии в</h2>
        <Tours />
      </div>
    </section>
  );
};

export { Excursions };
