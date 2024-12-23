import React from 'react'
import { useRef } from 'react'
import messageArrow from '../../../assets/Images/icons/message-arrow.png'

function Chatform({setchatHistory}) {
    const inputRef = useRef();
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;

        setchatHistory(history => [...history,{role:"user",text:userMessage}]);
        inputRef.current.value = "";
    }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" className="chat-input" placeholder="Type a message..."/>
        <button className='material-symbol-rounded'><img src={messageArrow} alt="" style={{width:"25px", height:"25px"}} /></button>
    </form>
  )
}

export default Chatform
