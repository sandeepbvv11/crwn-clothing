import React from 'react';
import './category-component.scss';
const Categorycomponent = ({ category }) => {
    const { id, imageUrl, title } = category;
    return (
        <div key={id} className='category'>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
    );
}
export default Categorycomponent;