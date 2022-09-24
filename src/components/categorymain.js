import React from 'react';
import Categorycomponent from '../components/category-component';
import './categorymain.scss';
const Categorymain=({categories})=> (
    
    <div className="categories-container">
    {categories.map((category) => (
      <Categorycomponent key={category.id} category={category}/>
))}
    
    
  </div>
    
    );

export default Categorymain;