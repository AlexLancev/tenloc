import React from "react";
import BecomeGuideBg from "../../img/guide/bg3.png";

import "./style.scss";

const BecomeGuide = () => {
  return (
    <section
      className="become-guide"
      style={{ backgroundImage: `url(${BecomeGuideBg})` }}
    >
      <div className="container">
        <div className="become-guide__inner">
          <h2 className="become-guide__heading">Кто может стать гидом</h2>
          <p className="become-guide__description">
            С нами сотрудничают профессиональные историки, писатели, журналисты,
            блогеры, искусствоведы и просто харизматичные личности.
          </p>
          <p className="become-guide__text">
            Главное знать свой город и уметь увлечь гостей, во всем остальном мы
            поможем!
          </p>
        </div>
      </div>
    </section>
  );
};

export { BecomeGuide };
