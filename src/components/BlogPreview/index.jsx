import React from "react";
import bg from "../../img/blog-preview/item-1.png";
import { BsThreeDots } from "react-icons/bs";

const BlogPreview = () => {
  return (
    <ul className="blog-preview__list">
      <li className="blog-preview__item">
        <img src={bg} alt="" className="blog-preview__img" />
        <div className="blog-preview__date">08.11.2023 07:14</div>
        <h3 className="blog-preview__heading">
          Калининград от центра до окраин
        </h3>
        <a href="/" className="blog-preview__link">
          <span className="blog-preview__link-text">Читать</span>
          <BsThreeDots className="blog-preview__icon" size={10} />
        </a>
      </li>
      <li className="blog-preview__item">
        <img src={bg} alt="" className="blog-preview__img" />
        <div className="blog-preview__date">08.11.2023 07:14</div>
        <h3 className="blog-preview__heading">
          Поездка в Турцию как гастрономический тур
        </h3>
        <a href="/" className="blog-preview__link">
          <span className="blog-preview__link-text">Читать</span>
          <BsThreeDots className="blog-preview__icon" size={10} />
        </a>
      </li>
      <li className="blog-preview__item">
        <img src={bg} alt="" className="blog-preview__img" />
        <div className="blog-preview__date">08.11.2023 07:14</div>
        <h3 className="blog-preview__heading">
          Знакомство со Стамбулом: история одной любви
        </h3>
        <a href="/" className="blog-preview__link">
          <span className="blog-preview__link-text">Читать</span>
          <BsThreeDots className="blog-preview__icon" size={10} />
        </a>
      </li>
      <li className="blog-preview__item">
        <img src={bg} alt="" className="blog-preview__img" />
        <div className="blog-preview__date">08.11.2023 07:14</div>
        <h3 className="blog-preview__heading">
          Экскурсия в Выборг из Санкт-Петербурга с посещением замка и парка
          Монрепо
        </h3>
        <a href="/" className="blog-preview__link">
          <span className="blog-preview__link-text">Читать</span>
          <BsThreeDots className="blog-preview__icon" size={10} />
        </a>
      </li>
    </ul>
  );
};

export { BlogPreview };
