"use client";

import React, { useState, useEffect, useRef } from "react";

import ChatInput from "@/app/components/ChatInput";
import PromptPanel from "@/app/components/PromptPanel";
import MessageList from "@/app/components/MessageList";
import { Message } from "@/app/components/ChatBox";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

function App() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    // auto-scroll to newest message
    const bottomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async (promptFromButton?: string) => {
        const text = promptFromButton || input;
        if (!text.trim() || loading) return;

        // push user message
        const userMessage = { sender: "user", text };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/ask`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: text }),
            });

            if (res.ok) {
                const data = await res.json();
                // attach resources array (may be undefined)
                const botMessage = {
                    sender: "bot",
                    text: data.response,
                    resources: data.resources || [],
                };
                setMessages((prev) => [...prev, botMessage]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "Sorry, something went wrong. Please try again." },
                ]);
            }
        } catch (err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Network error. Please check your connection." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
            {/* Minimalist header */}
            <header className="w-full max-w-2xl mx-auto px-4 pt-8 pb-4">
                <h1 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 tracking-tight">LifeLine Connect</h1>
                <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-2">Find local help for housing, food, mental health, and more</p>
            </header>

            {/* Main chat area */}
            <main className="flex-1 flex flex-col w-full max-w-2xl mx-auto px-4 pb-4">
                <div className="flex-1 flex flex-col justify-end">
                    <MessageList messages={messages} />
                    <PromptPanel onSend={handleSend} />
                    <div ref={bottomRef} />
                </div>
            </main>

            {/* Input bar always at bottom */}
            <footer className="w-full max-w-2xl mx-auto px-4 pb-6">
                <ChatInput
                    onSend={handleSend}
                    input={input}
                    setInput={setInput}
                    loading={loading}
                />
            </footer>

            {/* Minimal loading overlay */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/25 dark:bg-black/60 z-50">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" />
                </div>
            )}
        </div>
    );
}

export default App;
