import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item}>
        <img src={item.image} alt="example" className='work__img' height={500} weight={500}/>
        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
            Demo <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
    )
}

export default WorkItems