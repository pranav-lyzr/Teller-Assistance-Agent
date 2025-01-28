import React from 'react';
import ReactMarkdown from 'react-markdown';

interface SidebarProps {
  data?: string; // Markdown content as string
}

const Sidebar = ({ data }: SidebarProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 border-l border-gray-200/80 min-h-screen shadow-lg transition-all duration-300 hover:shadow-xl overflow-y-auto w-180">
      <div className="mb-10 space-y-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Assistant
        </h1>
        
      </div>

      {data ? (
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-800 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-800 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-medium text-gray-800 mb-2">{children}</h3>,
              p: ({ children }) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="space-y-2 mb-4 list-disc pl-4">{children}</ul>,
              ol: ({ children }) => <ol className="space-y-2 mb-4 list-decimal pl-4">{children}</ol>,
              li: ({ children }) => (
                <li className="text-gray-600 leading-relaxed">
                  {children}
                </li>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 text-gray-800 rounded px-1 py-0.5 text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => (
                <a href={href} className="text-indigo-600 hover:text-indigo-800 underline">
                  {children}
                </a>
              ),
            }}
          >
            {data}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="space-y-6">

          <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Quick Tips
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
            I analyze your messages and provide relevant information along with helpful references. Each response is tailored to
            your specific needs.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 transition-all duration-300 group-hover:scale-125"></span>
              <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                Ask specific questions for better responses
              </span>
            </li>
            <li className="flex items-start group">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 transition-all duration-300 group-hover:scale-125"></span>
              <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                Check the provided references for more details
              </span>
            </li>
            <li className="flex items-start group">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 transition-all duration-300 group-hover:scale-125"></span>
              <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                Use clear and concise language
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;