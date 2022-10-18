import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const AllCategories=['all',...new Set(items.map((item)=>{
  return item.category;
}))]



function App() {

  const [menuItems, setmenuItems] = useState(items);
  const [categories, setcategories] = useState([]);



  const filterItems=(category)=>{

    if(category==='all'){
      setmenuItems(items);
      return;
    }
   const newItems=items.filter((item)=>{
     if(item.category===category)
     return item;
   })

   setmenuItems(newItems);
  }


  return <main>
    <section className="menu section">

     <div className="title">
      <h2>Our menu</h2>
      <div className="underline"></div>
     </div>

     <Categories itemCategory={AllCategories} filterItems={filterItems} />
     <Menu items={menuItems} />




    </section>

   
  
  </main>
}
export default App;
