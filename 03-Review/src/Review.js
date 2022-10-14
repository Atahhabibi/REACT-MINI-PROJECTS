import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegIdBadge } from 'react-icons/fa';

const Review = () => {
  const [index, setindex] = useState(0);
  const {name,job,image,text}=people[index];

/*   const checkNumber=(number)=>{
   if(number>people.length-1) return 0; 
   if(number<0) return people.length-1;
   return number;

  } */


   const nextPerson=()=>{

    let newIndex=index+1;

    if(newIndex>people.length-1){
      setindex(0);
    }else{
      setindex(newIndex);
    }

   }

   const PrevPerson=()=>{
    let newIndex=index-1;

    if(newIndex<0){
      setindex(people.length-1);
    }
    else{
      setindex(newIndex);
    }
  
   }

   const randomPerson=()=>{
   let randomNumber=Math.floor(Math.random()*people.length);
   if(randomNumber===index) {
    randomNumber=index+1;
   }
   setindex(randomNumber)

   console.log(randomNumber);
   }





  return <article className='review'>

    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className='quote-icon'><FaQuoteRight /> </span>
    </div>

    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>

    <div className="button-container">

      <button onClick={PrevPerson}>
        <FaChevronLeft className='prev-btn' />
      </button>

      <button onClick={nextPerson}>
        <FaChevronRight className='next-btn' />
      </button>
      

    </div>

     <button className='random-btn' onClick={randomPerson}>suprise me</button>
   
  </article>;
};

export default Review;
