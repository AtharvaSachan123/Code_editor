import { Box } from '@chakra-ui/react'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import { useState } from 'react'
import { useRef } from 'react'
import LanguageSelector from './LanguageSelector'
export const CodeEditior = () => {
    const editorRef = useRef()
    const [value, setValue] = useState("")
    const [language, setLanguage] = useState('JavaScript')


    const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    
    }
    const onSelect=(language)=>{
        setLanguage(language)
    }
  return (
    <Box>
        <LanguageSelector language={language} onSelect={onSelect}/>
        <Editor height="75vh" 
            theme='vs-dark'
            language={language}
         defaultValue="// Write your Code here"
            onMount={onMount}
         value={value} 
         onChange={
            (value) => setValue(value)
         }/>
    </Box>
  )
}
