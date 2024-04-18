import React from 'react'
import { Box, Button, useToast } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { executeCode } from '../api'
import { useState } from 'react'
const Output = ({editorRef,language}) => {
    const toast=useToast();
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
        const runCode= async()=>{
            const sourceCode=editorRef.current.getValue();
            if(!sourceCode){
                return;
            }
            try{
                setIsLoading(true)
                const {run:result}=await executeCode(language,sourceCode)
                setOutput(result.output.split('\n'))

                result.stderr ?setIsError(true):setIsError(false)
            }catch(error){

                toast({
                    title:'Error',
                    description:error.message,
                    status:'error',
                    duration:600,
                    isClosable:true
                })
            }    finally{
                    setIsLoading(false)
                
                }
            
        }



  return (
    <Box w='90%'>
        <Text mb={2} fontSize='lg'>Output</Text>

        <Button
        variant='outline'
        colorScheme='green'
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
        >
            Run Code
        </Button>
        <Box
        height='75vh'
        p={2}
        color={
            isError ? 'red.400' : ''
        }
        border='1px  solid'
        borderRadius={4}
        borderColor={
            isError ? 'red.500' : 'grey.700'
        }
        
        >
            {
                output ? 
                output.map(
                    (data,index)=>(
                        <Text key={index}>{data}</Text>
                ) ):"Click on Run Code to execute the code"
            }

        </Box>

    </Box>
  )
}

export default Output