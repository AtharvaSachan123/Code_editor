import { extendTheme } from '@chakra-ui/react'
import React from 'react'

const theme=extendTheme({
    config:{
        initialColorMode:'dark',
        useSystemColorMode:false
    },
});
export default theme