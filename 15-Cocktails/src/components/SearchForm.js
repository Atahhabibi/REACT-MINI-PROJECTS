import React, {useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setsearchTerm}=useGlobalContext();
  const searchValue=useRef('');

  const searchCocktail=()=>{
    setsearchTerm(searchValue.current.value)
  }

  useEffect(() => {
   searchValue.current.focus();
  }, [])


  const handleSubmit=(e)=>{
   e.preventDefault();
  }







  return (

    <section className="section search">

      <form className="search-form" onSubmit={handleSubmit}>

        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktails</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>

        </div>




      </form>

    </section>
  )
}

export default SearchForm
