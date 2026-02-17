import React, { useState, useContext } from 'react'
import './ChatBot.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'

const ChatBot = () => {
    const { url } = useContext(StoreContext);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hey, I am your food guide! Ask me anything about our menu.' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    React.useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    }

    const handleSend = async () => {
        if (input.trim() === "") return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await axios.post(url + "/api/chat", { prompt: input });
            if (response.data.success) {
                const botMessage = { sender: 'bot', text: response.data.message };
                setMessages(prev => [...prev, botMessage]);
            } else {
                setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I encountered an error." }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I am offline right now." }]);
        } finally {
            setIsTyping(false);
        }
    }

    return (
        <div className='chatbot'>
            {!isOpen && (
                <div className="chatbot-icon" onClick={toggleChat}>
                    <img src={assets.message_icon || assets.logo} alt="Chat" />
                </div>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>AI Food Assistant</h3>
                        <button onClick={toggleChat}>x</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                        {isTyping && <div className="message bot"><p>Typing...</p></div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Ask about food..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatBot
