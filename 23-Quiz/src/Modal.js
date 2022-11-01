import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {

  const{IsModalOpen,closeModal,Correct,Questions}=useGlobalContext();



  return <div className={`${IsModalOpen?'modal-container isOpen':'modal-container'}`}>

    <div className="modal-content">
      <h2>congrats!</h2>
      <p>You answered of {Math.ceil(((Correct/(Questions.length))*100))} % questions correctly</p>
      <button className="close-btn" onClick={closeModal}>Play again</button>
    </div>


  </div>
}

export default Modal
