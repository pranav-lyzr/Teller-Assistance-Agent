import React, { useState } from 'react';
import { Send } from 'lucide-react';
interface ChatInputProps {
  onSendMessage: (message: string) => void;
}
const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  return (
    <div className="sticky bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <form onSubmit={handleSubmit} className="mx-auto px-4 py-3">
        <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 transition-all duration-200">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent px-3 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className="inline-flex items-center justify-center p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default ChatInput;