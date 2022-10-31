import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {searchTerm ,handleSearch}=useGlobalContext();




 


  return <article>

    <form  className='search-form'>

      <h2>Search Hacker News</h2>

      <input type="text" className='form-input' value={searchTerm} onChange={(e)=>{handleSearch(e.target.value,searchTerm)}}/>


    </form>
    
  </article>
}

export default SearchForm
