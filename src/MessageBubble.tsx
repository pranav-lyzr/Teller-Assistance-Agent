import React from 'react';
import { MessageCircle, User } from 'lucide-react';
interface MessageBubbleProps {
  isAI: boolean;
  message: string;
  timestamp: string;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ isAI, message, timestamp }) => {
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-6 px-4`}>
      <div className={`flex items-start max-w-[85%] ${isAI ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${isAI ? 'mr-3' : 'ml-3'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isAI ? 'bg-[#7b43db18]' : 'bg-white'
          }`}>
            {isAI ? (
              <MessageCircle className="w-5 h-5 text-black" />
            ) : (
              <User className="w-5 h-5 text-gray-600" />
            )}
          </div>
        </div>
        
        <div className={`flex flex-col ${isAI ? 'items-start' : 'items-end'}`}>
          <div className={`rounded-2xl px-4 py-2.5 shadow-sm ${
            isAI 
              ? 'bg-white border border-gray-200 text-gray-800' 
              : 'bg-[#7b43db18] text-black'
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message}</p>
          </div>
          <span className={`text-xs text-gray-400 mt-1.5 ${isAI ? 'ml-1' : 'mr-1'}`}>
            {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MessageBubble;
