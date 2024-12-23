import React from 'react'
import {useState} from 'react'
import chatbotIcon from '../../../assets/Images/icons/chatbot.png'
import arrow from '../../../assets/Images/icons/arrow.svg'
import ChatMessage from './ChatMessage'
import './chatbot.css'
import Chatform from './chatform'

const Chatbot = () => {
  const [chatHistory, setchatHistory] = useState([]);
  
  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <img src={chatbotIcon} alt="chatbot-image"/>
              <h2 className="logo-text">ChatBot</h2>
            </div>
            <button className="down-arrow-btn"><img src={arrow} alt="" /></button>
          </div>
          <div className="chatbot-body">
            <div className="message bot-message">
              <img src={chatbotIcon} alt="" />
              <p className='message-text'>
                Hello! I am your assistant. <br/> How can I help you today?
              </p>
            </div>
            {/*Render */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
            
            <div className="chat-footer">
              <Chatform setchatHistory={setchatHistory}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot