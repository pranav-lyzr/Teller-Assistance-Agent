import React from 'react';
import ReactMarkdown from 'react-markdown';
interface ResponseCardProps {
  content: string;
}
const ResponseCard = ({ content }: ResponseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 mb-4 border border-gray-100">
      <div className="prose prose-sm max-w-none">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="text-gray-600 leading-relaxed">{children}</p>,
            a: ({ children, href }) => (
              <a href={href} className="text-indigo-600 hover:text-indigo-800 underline">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
export default ResponseCard;