import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'


 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
        <head>
          <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
        </head>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </React.StrictMode>
)
