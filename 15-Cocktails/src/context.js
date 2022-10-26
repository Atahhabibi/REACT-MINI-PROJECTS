import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const[loading,setloading]=useState(true);
  const [searchTerm, setsearchTerm] = useState('a');
  const [cockTails, setcockTails] = useState([]);


  const fetchDrinks=useCallback(async(url)=>{
    setloading(true);

    try {
      const response=await fetch(`${url}${searchTerm}`)
      const data=await response.json();
      const {drinks}=data;
      
      if(drinks){

        const newCocktails=drinks.map((item)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;

          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })

        setcockTails(newCocktails)



      }else{
        setcockTails([]);
      }

      setloading(false);

      
    } catch (error) {
      console.log(error);
      setloading(false)
    }

  },[searchTerm])


  useEffect(() => {
      fetchDrinks(url);
  },[searchTerm,fetchDrinks])


  



  
  return <AppContext.Provider value={{loading,cockTails,setsearchTerm,setcockTails,setloading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
