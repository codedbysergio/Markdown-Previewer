import React from 'react'
import { marked } from 'marked';

export default function Previewer({ text }) {


  return (
    <div className='previewer-container'>
        <div className='previewer-header'>
            <i class="fa fa-free-code-camp" aria-hidden="true"></i>
            Previewer
        </div>
        <div 
            id='preview'
            dangerouslySetInnerHTML={{
                __html: marked(text),
            }}
        >
        </div>
    </div>
  )
}
