import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const{Loading,hits,handleRemove}=useGlobalContext();


  if(Loading){
    return <div className='loading'></div>
  }

  return <div className="stories">

      {
         hits.map((item,index)=>{
          return <div className="story" key={item.objectID}>

            <h4 className='title' >{item.title}</h4>
            <p >{`${item.points} by ${item.author} | ${item.num_comments}`}</p>
            <a href={item.url} className='read-link'>ReadMore</a>
            <button className='remove-btn' onClick={()=>handleRemove(item.objectID)}>remove</button>

          </div>
        })
      }




  </div>

}

export default Stories
