// src/features/model/Chat.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaInfoCircle, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import { sendChatMessage } from "@/src/lib/data_services";

type Message = { role: "user" | "assistant"; text: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Add a welcome message when the component mounts / user navigates to chat
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text: "Hello! I'm your MindEase AI companion. I'm here to listen and support you with your mental health journey. How are you feeling today?",
      },
    ]);
  }, []);

  // auto scroll to bottom when messages update
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    // create typed message objects
    const userMessage: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]); // optimistic update
    setInput("");
    setLoading(true);

    try {
      const res = await sendChatMessage(text); // calls /api/chats
      const assistantText = typeof res?.reply === "string" ? res.reply : "Sorry, something went wrong.";
      const assistantMessage: Message = { role: "assistant", text: assistantText };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: Message = { role: "assistant", text: "⚠️ Something went wrong. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-1 flex-col pt-16">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <div ref={scrollRef} className="space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs lg:max-w-md xl:max-w-xl ${msg.role === "user" ? "order-2 ml-3" : "order-1 mr-3"}`}>
                  <div className={`rounded-2xl rounded-bl-md px-4 py-3 shadow-sm ${msg.role === "user" ? "bg-indigo-600 text-white" : "bg-white text-gray-800"}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  
                </div>

                <div className={`flex-shrink-0 ${msg.role === "user" ? "order-1" : "order-2"}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${msg.role === "user" ? "bg-indigo-600" : "bg-gray-200"}`}>
                    {msg.role === "user" ? <FaUser className="text-sm text-white" /> : <FaRobot className="text-sm text-gray-600" />}
                  </div>
                </div>
              </div>
            ))}
            {loading && <div className="text-sm text-gray-500">MindEase is typing...</div>}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end space-x-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-0 focus:ring-2 focus:ring-indigo-600"
                disabled={loading}
              />
            </div>

            {/* Use native button for now to avoid forwarding issues */}
            <button
              onClick={handleSend}
              disabled={loading}
              className="flex items-center justify-center rounded-full bg-indigo-600 p-3 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              <FaPaperPlane />
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="flex items-center justify-center text-xs text-gray-500">
              <FaInfoCircle className="mr-1" /> This AI provides supportive guidance but is not a replacement for professional mental health care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
