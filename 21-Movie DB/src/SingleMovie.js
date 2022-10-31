import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'

const SingleMovie = () => {

  const {id}=useParams();


    const {Loading,Error,data:Movie}=useFetch(`&i=${id}`);

  if(Loading){
    return <div className="loading"></div>
  }

  if(Error.show){
    
    return <div className="page-error">
      <h1>{Error.msg}</h1>
      <Link to='/' className='btn'>Back to Movies</Link>
    </div>
  }


  const{Poster:poster,Year:year,Plot:plot,Title:title}=Movie;

  return <section className='single-movie'>

    <img src={poster} alt={title} />

    <div className="single-movie-info">

    <h2>{title}</h2>
    <p>{plot}</p>
    <h4>{year}</h4>
    <Link to='/' className='btn'>Back Home</Link>

    </div>


  
  </section>
}

export default SingleMovie
