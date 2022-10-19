import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {

  const [alert, setalert] = useState(false);
  const bcg=rgb.join(',');
  /*   const hex=rgbToHex(...rgb); */


  useEffect(() => {
   
   const time=setInterval(() => {
     setalert(false);
   },2000);

   return ()=>clearTimeout(time)
    
  }, [alert])



  const hexValue=`#${hexColor}`;

  return <article className={`color ${index>10 &&'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}  onClick={()=>{setalert(true); navigator.clipboard.writeText(hexValue)}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
