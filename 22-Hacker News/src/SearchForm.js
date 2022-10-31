import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {searchTerm ,handleSearch}=useGlobalContext();




 


  return <form  className='search-form' onSubmit={(e)=>e.preventDefault()}>

      <h2>Search Hacker News</h2>

      <input type="text" className='form-input' value={searchTerm} onChange={(e)=>{handleSearch(e.target.value,searchTerm)}}/>

    </form>

}

export default SearchForm
