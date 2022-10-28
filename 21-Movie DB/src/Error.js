import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        
        <h1>PAGE NOT FOUND</h1>
        <Link to='/' className='btn'>Back home</Link>
    
    </div>
  )
}

export default Error;
