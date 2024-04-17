
import { Box } from '@chakra-ui/react'
import { CodeEditior } from './components/CodeEditior'
function App() {
  

  return (
    <Box
    minH="100vh" bg='#0f0a19' color='grey.500' px={6} py={8}>
    
    <CodeEditior/>
    </Box>
  )
}

export default App
