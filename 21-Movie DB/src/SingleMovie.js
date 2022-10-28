import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
const tempImg ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {

  const[Loading,setLoading]=useState(true);
  const[Error,setError]=useState({show:false,msg:''});
  const[Movie,setMovie]=useState({});

  const {id}=useParams();

    const fetchData=async(url)=>{
  
      setLoading(true);
    
      try {
      
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);

        if(data.Response==='True'){

          setMovie(data)
          setLoading(false);
          setError({show:false,msg:'fetch movie by id successful'})
          
        }else{
          setLoading(false);
          setError({show:false,msg:data.Error})
        }
        
        
      } catch (error) {

        setError({show:true,msg:''})
        setLoading(false);
        console.log(error);
        
      }
    }
    
     useEffect(()=>{
       fetchData(`${API_ENDPOINT}&i=${id}`);
     },[id])


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
