import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {

    const[data,Setdata]=useState([]);
    const[Loading,setLoading]=useState(true);
    const[Error,setError]=useState({show:false,msg:''});

    const fetchMovies=async(urlParams)=>{
  
      setLoading(true);
    
      try {
  
        const response=await fetch(urlParams);
        const data=await response.json();

        if(data.Response==='True'){
        Setdata(data.Search||data);
        setError({show:false,msg:''});

        }else{
            setError({show:true,msg:data.Error})
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        console.log(error);
        
      }
    }
    
    useEffect(()=>{

      fetchMovies(`${API_ENDPOINT}${urlParams}`);

    },[urlParams])
  



    return {data,Error, Loading};
}

export default useFetch
