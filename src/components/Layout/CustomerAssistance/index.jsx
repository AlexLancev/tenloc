import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GoQuestion } from 'react-icons/go';

import { ContactWidget } from '../Header/ContactWidget';

import './style.scss';

const CustomerAssistance = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className='cust-assist'>
      <button
        onClick={() => setIsVisible(!isVisible)}
        type='button'
        className='cust-assist__btn'
      >
        <span className='cust-assist__text'>Помощь клиентам</span>
        <MdKeyboardArrowDown
          className={`cust-assist__icon arrow-icon ${isVisible ? 'arrow-icon--visible' : ''}`}
          size={20}
        />
        <GoQuestion className='cust-assist__question' />
      </button>
      {isVisible && <ContactWidget />}
    </div>
  );
};

export { CustomerAssistance };
