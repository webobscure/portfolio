import React from 'react';

import arrow from '../../assets/arrow-right-solid.svg'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item}>
      <img src={item.image} alt="example" className="work__img"   />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo
        <img src={arrow} alt="arrow" className='arrow'/>
      </a>
    </div>
  );
};

export default WorkItems;
