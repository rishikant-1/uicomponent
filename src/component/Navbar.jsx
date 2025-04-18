import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

function ComponentPreview() {
  const code = `
<div className="p-4 bg-blue-500 text-white rounded">
  Hello World!
</div>
  `

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-6 text-white">

      <div className="w-full max-w-lg p-4 mb-4 bg-zinc-800 rounded shadow">
        <div className="p-4 bg-blue-500 text-white rounded">
          Hello World!
        </div>
      </div>

      <div className="w-full max-w-lg bg-zinc-800 relative rounded">
        <SyntaxHighlighter language="jsx" style={dracula} >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default ComponentPreview
