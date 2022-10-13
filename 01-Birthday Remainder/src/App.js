import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setpeople] = useState(data);

  const removeAll=()=>{
   setpeople([]);
  }

  return <main>
    <section className="container">

    <h3>{people.length} birthday today</h3>
    <List people={people}/>
    <button onClick={removeAll}>clear All</button>

    </section>

  </main>;
}

export default App;