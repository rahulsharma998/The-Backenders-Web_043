import React from 'react'
import chatbotIcon from '../../../assets/Images/icons/chatbot.png'

function ChatMessage({chat}) {
  return (
    <div className={`message ${chat.role === "model"?"bot":"user"}-message`}>
        {chat.role === "model" && chatbotIcon}
        <p className='message-text'>
        {chat.text}
        </p>
    </div>
  )
}

export default ChatMessage
