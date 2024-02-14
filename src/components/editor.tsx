'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: 'm-5 focus:outline-none text-left'
      }
    }
  })

  if (!editor) {
    return null
  }

  return (
    <div>
      <div className="flex-col justify-center items-center text-center">
        <h1>Rich Text Editor via Tiptap</h1>
      </div>
      <div className="flex-col justify-center items-center">
        <div className="w-2/3 mt-10 mx-auto">
          <div className="p-3 overflow-y-scroll overflow-hidden mt-3">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  )
}
