import React, { useState } from 'react';
import { useEffect } from 'react';
import text from './data';
import data from './data';
function App() {

  const [count, setcount] = useState(0);
  const [Text, setText] = useState([]);

  const handleSubmit=(e)=>{
   e.preventDefault();

   let amount=parseInt(count);

   if(count<=0){
    amount=1;
   }

   if(count>=data.length-1){
    amount=8;
   }
  
  
   setText(data.slice(0,amount));

  }
  
  return <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form  className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraph: 
      </label>

      <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setcount(e.target.value)}/>
      <button type='submit' className='btn'>Generate</button>

    </form>

      <article className='lorem-text'>
        {Text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}

      </article>

  </section>
}

export default App;
