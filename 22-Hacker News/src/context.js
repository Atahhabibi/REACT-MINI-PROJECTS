import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'


const AppContext = React.createContext()



const AppProvider = ({ children }) => {

  const initialState={
    Loading:true,
    searchTerm:'React',
    hits:[],
    page:0,
    nbPages:0,
  }


  
  
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
    const fetchStories=async(url)=>{
      dispatch({
        type:SET_LOADING,
        payload:true,
      })
  
      try {
    
        const response=await fetch(url);
        const data=await response.json();

       

        

        dispatch({
          type:SET_STORIES,
          payload:{hits:data.hits,nbPages:data.nbPages},
        })



       
        dispatch({
          type:SET_LOADING,
          payload:false,
        })
        
        
      } catch (error) {
        console.log(error);

        dispatch({
          type:SET_LOADING,
          payload:false,
        })
      }
    }
    
    useEffect(()=>{
      fetchStories(`${API_ENDPOINT}query=${state.searchTerm}`);
    },[])


   const handleSearch=(searchTerm)=>{

    dispatch({
      type:HANDLE_SEARCH,
      payload:searchTerm
    })   
  }
  
  
  const handlePage=(term)=>{
    let newPage=state.page;
    if(term==='inc'){

     dispatch({
      type:HANDLE_PAGE,
      payload:newPage+1
     })
    }

    if(term==='dec'){

     dispatch({
      type:HANDLE_PAGE,
      payload:newPage-1
     })
    }
  
   }


   
   useEffect(()=>{
   fetchStories(`${API_ENDPOINT}query=${state.searchTerm}&page=${state.page}`)
   },[state.searchTerm,state.page])


   const handleRemove=(id)=>{
    dispatch({
      type:REMOVE_STORY,
      payload:id,
    })

   }




  return <AppContext.Provider value={{...state,handleSearch,handlePage,handleRemove}}>{children}</AppContext.Provider>
}

















// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
