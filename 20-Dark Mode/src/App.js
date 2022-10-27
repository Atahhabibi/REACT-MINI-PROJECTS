import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

 const getStorageTheme=()=>{

  let theme='light-theme';

  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme');
  }

  return theme; 

 }



function App() {

  const[Theme,setTheme]=useState(getStorageTheme())

  useEffect(()=>{
   document.documentElement.className=Theme;
   localStorage.setItem('theme',Theme)
  },[Theme])


   const changeTheme=(e)=>{
     e.preventDefault();
     if(Theme==='light-theme'){
      setTheme('dark-theme');
     }else {
      setTheme('light-theme')
     }
   }
  
  return <main>

    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button className='btn' onClick={changeTheme} >toggle</button>
      </div>
    </nav>

    <section className="articles">
      {
        data.map((item)=>{
          return <Article key={item.id} {...item}/>;
        })
      }

    </section>

  </main>
}
export default App;
