import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './Error'
import {Routes} from 'react-router-dom'
import SingleMovie from './SingleMovie'

function App() {
  return <Routes>

    <Route path='/' element={<Home/>}/>          
    <Route path='/movies/:id' element={<SingleMovie/>}/>
    <Route path='*' element={<Error/>}/>

    {/* <Route path='/' exact><Home/></Route>       // Reacter router 5 
    <Route path='/movies/:id' children={<Movie/>}/>
    <Route path='*'><Error/></Route> */}


  </Routes>
}

export default App
