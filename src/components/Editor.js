import React, { useContext } from 'react'
import { MarkdownContext } from './App'

export default function Editor({ text }) {
    const { handleChangeText } = useContext(MarkdownContext)

  return (
    <div className='editor-container'>
        <div className='editor-header'>
        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            Editor
        </div>
        <textarea 
            value={text}
            id='editor'
            onChange={e => handleChangeText(e.target.value)}
        ></textarea>
    </div>
  )
}
