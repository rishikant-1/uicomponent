import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';
import { temp } from './temp';

const Uicomponent = () => {
  const [copied, setCopied] = useState(false);
  
  const codeString = temp[0].button;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

 

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-100">Button <span className='text-blue-700'> components</span> used here on your website.</h1>
      <h2 className='mb-4 text-indigo-600'>If you meant something else, feel free to clarify, and I’ll be happy to assist!</h2>
      <div className="w-full p-6 bg-zinc-900 mb-6">
      <button className='px-5 py-2 rounded-md text-white hover:bg-blue-600 bg-blue-500'>click me</button>
      </div>
      <div className="relative rounded-lg shadow-lg border border-gray-700 mt-4 overflow-auto max-h-[500px] w-full">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-3 py-1 rounded hover:bg-gray-700 transition flex items-center gap-1"
        >
          <Copy size={14} />
          {copied ? 'Copied!' : 'Copy'}
        </button>

        <SyntaxHighlighter
          language="html"
          style={dracula}
          showLineNumbers
          wrapLines
          customStyle={{
            fontSize: '14px',
            padding: '1.5rem',
            margin: 0,
            background: 'transparent',
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Uicomponent;
