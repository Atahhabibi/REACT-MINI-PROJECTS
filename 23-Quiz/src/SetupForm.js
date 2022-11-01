import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

  const{Quiz,handleSubmit,handleChange,Error}=useGlobalContext();

  

  return <main> 
   <section  className='quiz quiz-small'>

    <form className='setup-form' onSubmit={(e)=>{handleSubmit(e)}}>
 
      <h2>Setup Quiz</h2>




      {/* amount */}

      <div className="form-control">
        <label htmlFor="amount" >number of questions</label>
        <input type="number" name='amount' id='amount' className='form-input' value={Quiz.amount} onChange={handleChange} min={1} max={50}/>
      </div>




      {/* category */}

      <div className="form-control">
        <label htmlFor="category">Category</label>
        <select id='category' className='form-input' value={Quiz.category} name='category' onChange={handleChange}>

          <option  value={'sports'}>Sports</option>
          <option  value={'history'}>History</option>
          <option  value={'politics'}>politics</option>
        </select>
      </div>



      {/* difficulty */}
      <div className="form-control">
        <label htmlFor="difficulty">Select difficulity</label>
        <select id='difficulty' className='form-input' value={Quiz.difficulty} name='difficulty' onChange={handleChange}>
          <option  value={'easy'}>Easy</option>
          <option  value={'medium'}>Medium</option>
          <option  value={'hard'}>Hard</option>
        </select>

      </div>




      <button type='submit' className='submit-btn'>Start</button>

      {Error && <p className='error'>can't generate questions please try different options</p>}



      
    </form>
 
   </section>
    
  </main>
}

export default SetupForm
