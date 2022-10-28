import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {

  const {Query,setQuery,Error}=useGlobalContext();



  return <section>

    <form className='search-form' onSubmit={(e)=>{e.preventDefault()}}>
      <h2>Search Movies</h2>

      <input type="text" className='form-input' value={Query} onChange={(e)=>{setQuery(e.target.value)}}/>
      {Error.show?<div className='error'>{Error.msg}</div>:''}
      
    </form>


  </section>




}

export default SearchForm
