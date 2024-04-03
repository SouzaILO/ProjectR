import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import { red } from '@mui/material/colors'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import store from './Redux/store.ts'


 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
    <Provider store={store} >
    
      <ChakraProvider>
        <App />
      </ChakraProvider>
    
    </Provider>
  </React.StrictMode>
)
