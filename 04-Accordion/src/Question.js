import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = (question) => {
  
  const{title,info}=question;
  const [showInfo, setshowInfo] = useState(false);

  const changeShow=()=>{
    if(showInfo){
      {}
    }
  }
   
  return <article className='question'>

    <header>
      <h4>{title}</h4>

      <button className='btn' onClick={()=>{setshowInfo(!showInfo)}}>{ showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>

    {showInfo && <p>{info}</p>}

   



    





  </article>


}

export default Question;
