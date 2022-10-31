import React, { useState, useContext } from 'react'
import useFetch from './useFetch';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[Query,setQuery]=useState('batman');

  const {Loading,Error,data:Movies}=useFetch(`&s=${Query}`);

  return <AppContext.Provider value={{Movies,Query,Loading,Error,setQuery}}>{children}</AppContext.Provider>

}


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
