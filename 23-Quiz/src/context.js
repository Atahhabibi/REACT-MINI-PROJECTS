import axios from 'axios'
import React, { useState, useContext} from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  
  const[Waiting,setWaiting]=useState(true);
  const[loading,setLoading]=useState(false);
  const[Questions,setQuestions]=useState([]);
  const[Index,setIndex]=useState(0);
  const[Correct,setCorrect]=useState(0);
  const[Error,setError]=useState(false);
  const[IsModalOpen,setIsModalOpen]=useState(false);
  
  const[Quiz,setQuiz]=useState({
    amount:10,
    category:'sports',
    difficulty:'easy'
  });
  

  const fetchQuestions=async(url)=>{
    setLoading(true);
    setWaiting(false);
    
    const response=await axios(url).catch(error=>console.log(error))
    
    if(response){
      
      const data=response.data.results;
      
      if(data.length>0){
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      }else{
        setWaiting(true);
        setError(true);
      }
      
      
    }else{
      setWaiting(true);
    }
    
  }
  
  /* https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'; */
  
  const nextQuestion=()=>{
    setIndex((oldIndex)=>{
      const index=oldIndex+1;
      if(index>Questions.length-1){
        openModal();
        return 0;
        
      }else{
        return index;
      }
      
    })
  }

  
  const CheckAnswer=(value)=>{
    
    if(value){
      
      if(value===Questions[Index].correct_answer){
        
        setCorrect((oldstate)=>{
          return oldstate+1;
        })
        
      }
      
    }
    
    nextQuestion();
    
  }
  
  
  
  const openModal=()=>{
    setIsModalOpen(true);
  }
  
  const closeModal=()=>{
    setWaiting(true);
    setCorrect(0)
     setIsModalOpen(false);
    }
    
    const handleChange=(e)=>{ 
      const name=e.target.name;
      const value=e.target.value;
      setQuiz({...Quiz,[name]:value})
      
      
      
      
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      const {amount,category,difficulty}=Quiz;
      const url=`${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;

      fetchQuestions(url);
  
   }





  return <AppContext.Provider value={{

    Waiting,
    loading,
    Questions,
    Index,
    Correct,
    Error,
    IsModalOpen,
    nextQuestion,
    CheckAnswer,
    closeModal,
    Quiz,
    handleChange,
    handleSubmit

  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
