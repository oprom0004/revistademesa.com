'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../app/actions'; // Import server action
import { MessageSquare, X, Send, User, LifeBuoy } from 'lucide-react';
import { ChatMessage, MessageRole } from '../lib/types';

const GeminiAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: MessageRole.MODEL, text: "Technical Support Online. Please specify your load requirements or target voltage (e.g., 220V, 800V) for application matching." }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input;
        setInput('');
        setMessages(prev => [...prev, { role: MessageRole.USER, text: userText }]);
        setIsLoading(true);

        // Call Server Action
        const responseText = await getGeminiResponse(userText);

        setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 print:hidden">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-sm px-6 py-4 shadow-xl flex items-center gap-3 border border-slate-700 transition-all"
                >
                    <LifeBuoy className="w-5 h-5 text-amber-400" />
                    <span className="font-bold tracking-tight uppercase text-sm">Engineering Support</span>
                </button>
            )}

            {isOpen && (
                <div className="bg-white rounded-sm shadow-2xl w-80 sm:w-96 flex flex-col border border-slate-300" style={{ height: '500px' }}>
                    {/* Header */}
                    <div className="bg-slate-900 p-4 flex justify-between items-center text-white rounded-t-sm">
                        <div className="flex items-center gap-2">
                            <LifeBuoy className="w-5 h-5 text-amber-400" />
                            <h3 className="font-bold text-sm uppercase tracking-wider">Technical Channel</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow overflow-y-auto p-4 bg-slate-50 space-y-4 font-mono text-sm">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 border ${msg.role === MessageRole.USER
                                    ? 'bg-slate-200 border-slate-300 text-slate-900'
                                    : 'bg-white border-slate-300 text-slate-800 shadow-sm'
                                    }`}>
                                    {msg.role === MessageRole.ASSISTANT ? (
                                        <div className="whitespace-pre-wrap">
                                            {msg.text.split(/(\bhttps?:\/\/[^\s]+)/g).map((part, i) => {
                                                // Clean common trailing punctuation/markdown from URL
                                                const cleanPart = part.replace(/[\*\)\]\.,]+$/, '');
                                                const suffix = part.slice(cleanPart.length);

                                                // Only make variabledcpowersupply.com links clickable
                                                if (cleanPart.match(/^https?:\/\//) && cleanPart.includes('variabledcpowersupply.com')) {
                                                    return (
                                                        <span key={i}>
                                                            <a
                                                                href={cleanPart}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:text-blue-800 underline"
                                                            >
                                                                {cleanPart}
                                                            </a>
                                                            {suffix}
                                                        </span>
                                                    );
                                                }
                                                return <span key={i}>{part}</span>;
                                            })}
                                        </div>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-slate-100 border border-slate-200 p-2 text-xs text-slate-500 italic">
                                    Querying database...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter spec query..."
                            className="flex-grow px-3 py-2 border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:border-slate-500 font-mono"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 disabled:opacity-50"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default GeminiAssistant;
