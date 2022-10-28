import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()



const AppProvider = ({ children }) => {

  const[Movies,setMovies]=useState([]);
  const[Query,setQuery]=useState('batman');
  const[Loading,setLoading]=useState(true);
  const[Error,setError]=useState({show:false,msg:''});
  
    const fetchMovies=async(url)=>{
  
      setLoading(true);
    
      try {
  
        const response=await fetch(url);
        const data=await response.json();
        if(data.Response==='True'){

          setMovies(data.Search)
          setError({show:false,msg:''});
          setLoading(false);
          
        }else{
          setError({show:true,msg:data.Error})
          setLoading(false);
        }

      } catch (error) {
        setLoading(false);
        console.log(error);
        
      }
    }
    
    useEffect(()=>{
      if(Query===''){
        setError({show:false,msg:'Please enter movie name'})

      }
      fetchMovies(`${API_ENDPOINT}&s=${Query}`);

    },[Query])
  

  return <AppContext.Provider value={{Movies,Query,Loading,Error,setQuery,setLoading,setError}}>{children}</AppContext.Provider>


}


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
