import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import { useState } from 'react'
import { useRef } from 'react'
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../constants'
export const CodeEditior = () => {
    const editorRef = useRef()
    const [value, setValue] = useState("")
    const [language, setLanguage] = useState('javascript')


    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();

    }
    const onSelect = (language) => {
        setLanguage(language);
        setValue(
            CODE_SNIPPETS[language],
        )
    }
    return (
        <Box>
            <HStack spacing={4}>
                <Box w='50%'>

                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor height="75vh"
                        theme='vs-dark'
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        onMount={onMount}
                        value={value}
                        onChange={
                            (value) => setValue(value)
                        } />

                </Box>


            </HStack>




        </Box>
    )
}
