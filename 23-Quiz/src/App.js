import React,{useEffect} from 'react'
import { useGlobalContext } from './context'
import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {


  const {loading,Waiting,Questions,Index,Correct,nextQuestion,CheckAnswer}=useGlobalContext();

  
  if(Waiting){
    return<SetupForm/>

  }
  
  if(loading){
    return <Loading/>
  }
  
  
  
  
  const {question,incorrect_answers,correct_answer}=Questions[Index];

  let answers=[...incorrect_answers]

 const tempIndex=Math.floor(Math.random()*4)

  console.log(tempIndex);
  
  if(tempIndex===3){
    answers.push(correct_answer)
  }else{
    answers.push(answers[tempIndex])
    answers[tempIndex]=correct_answer;
  }



  return <main>

    <Modal />

    <section className="quiz">

      <p className='correct-answers'>correct answers :{Correct}/{Index}</p>
      <article className="container">
       <h2 dangerouslySetInnerHTML={{__html:question}} />


       <div className="btn-container">
          {
            answers.map((answer,index)=>{
              return <button key={index}  className='answer-btn'  dangerouslySetInnerHTML={{__html:answer}} onClick={()=>{CheckAnswer(answer)}} />
            })
          }
       </div>

      </article>

    <button className="next-question" onClick={nextQuestion}>Next Question</button>

    </section>


    

  </main>
}

export default App


