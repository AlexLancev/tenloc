import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import { RiMap2Line } from 'react-icons/ri';
import { FaMailBulk } from 'react-icons/fa';

import './style.scss';

const ListingBenefits = () => {
  return (
    <section className='listing-benefits'>
      <div className='container'>
        <ul className='listing-benefits__list'>
          <li className='listing-benefits__item'>
            <div className='listing-benefits__header'>
              <GrUserManager className='listing-benefits__icon' />
              <b className='listing-benefits__head'>Экскурсии с душой</b>
            </div>
            <p className='listing-benefits__text'>
              Наши гиды – увлеченные своей работой, работают с душой и от души.
              Это люди с богатым опытом – журналисты, блогеры, историки,
              искусствоведы, которые любят людей и общение.
            </p>
          </li>
          <li className='listing-benefits__item'>
            <div className='listing-benefits__header'>
              <RiMap2Line className='listing-benefits__icon' />
              <b className='listing-benefits__head'>Эксклюзивный опыт</b>
            </div>
            <p className='listing-benefits__text'>
              Вам будут предложены необычные экскурсии, эксклюзивный подход и
              новый взгляд даже на хорошо знакомые места. Попробуйте прогулки по
              крышам, походы в секретные бары и не только!
            </p>
          </li>
          <li className='listing-benefits__item'>
            <div className='listing-benefits__header'>
              <FaMailBulk className='listing-benefits__icon' />
              <b className='listing-benefits__head'>Магия личного общения</b>
            </div>
            <p className='listing-benefits__text'>
              Все лучшее в экскурсии рождается при личном взаимодействии гида и
              участников. Никаких заученных программ, только то, что
              заинтересовало конкретно вас, что сделает вашу экскурсию ярким
              событием.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { ListingBenefits };
