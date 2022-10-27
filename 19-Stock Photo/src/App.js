import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID=`?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


//api access key

/* ahMqdMokp9Y7CtlRGo7S7jgf53eedbzjAYel88aOLjw */

//end root or base url 

/* https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY */

//full api with access code

//https://api.unsplash.com/photos/?client_id=ahMqdMokp9Y7CtlRGo7S7jgf53eedbzjAYel88aOLjw



function App() {
  
  const [loading,setLoading]=useState(false);
  const[photos,setPhotos]=useState([]);


  const fetImages=async()=>{

    setLoading(true);

    let url;

    url=`${mainUrl}${clientID}`;

    try {

      const response=await fetch(url);
      const data=await response.json();
      console.log(data)
      setLoading(false)
      
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      
    }




  }

  useEffect(()=>{
    fetImages();
  },[])














  return <h2>stock photos starter</h2>
}

export default App
