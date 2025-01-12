import React, { useState } from 'react';
import './laborbotpage.css';

function LaborBotPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Just a dummy handleSend
    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { user: true, text: input }]);
        setInput('');
    };

    return (
        <div className="laborbot-container">
            <div className="chat-section">
                <div className="chat-messages">
                    {messages.map((m, idx) => (
                        <div
                            key={idx}
                            className={m.user ? 'message user-message' : 'message bot-message'}
                        >
                            {m.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        placeholder="Ask me about UAE labor law..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>

            <div className="faq-section">
                <h3>Common FAQs</h3>
                <ul>
                    <li>What is the minimum wage in the UAE?</li>
                    <li>How to sponsor a family member in the UAE?</li>
                    <li>What are overtime rules for employees?</li>
                    <li>How many leaves am I entitled to?</li>
                    <li>How do I change employers?</li>
                </ul>
            </div>
        </div>
    );
}

export default LaborBotPage;
