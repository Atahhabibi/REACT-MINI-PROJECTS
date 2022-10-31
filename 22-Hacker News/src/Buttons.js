import React from 'react'
import { useGlobalContext } from './context'


const Buttons = () => {
  
  const {Loading,handlePage,nbPages,page}=useGlobalContext();

 
  return <div className="btn-container">

    <button disabled={Loading} onClick={()=>{

      handlePage('dec')

    }}>prev</button>

    <p>{page+1} of {nbPages}</p>

     <button disabled={Loading} onClick={()=>{

      handlePage('inc');

    }}>next</button>


</div>
}
export default Buttons;
