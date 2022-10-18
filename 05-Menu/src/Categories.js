import React from 'react';

const Categories = ({itemCategory,filterItems}) => {

 
  
  return <div className="btn-container">

    {itemCategory.map((item,index)=>{
      return <button className="filter-btn" key={index} onClick={()=>{filterItems(item)}}>{item}</button> 
    })}

  </div>
};

export default Categories;
