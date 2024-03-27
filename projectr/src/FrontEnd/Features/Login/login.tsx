import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react'
import NavLeft from '../../Components/Nav/NavLeft.tsx'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [User, setUser] = useState('')
  const [Password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isError, setIsError] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(User === '' || Password === '') {
      setIsError(true)
      setErrorMessage('Por favor, preencha todos os campos')
    }
    try {
      await signInWithEmailAndPassword(auth, User, Password)
      navigate('/')
    } catch (error) {
      setIsError(true)
      setErrorMessage('Usuário ou senha incorretos')
    }

  
}


  return (
    <HStack
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
      backgroundColor="#4A5568"
    >
      <VStack id="navleft" marginLeft={'10px'} marginTop={'50px'}>
      </VStack>
      <Box
        border="0px"
        backgroundColor="#2B6CB0"
        minWidth="500px"
        minHeight="500px"
        borderRadius="30px"
        padding="30px"
        boxShadow="dark-lg"
        p="6"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img
          src={require('../../../assets/img/resolucaologo.png')}
          alt="resolucaoLogo"
        />
        <NavLeft />
        <Box display="flex" alignItems="center">
          <form  onSubmit={handleSubmit}>

          
            <FormLabel>Usuário</FormLabel>
            <Input
              type="text"
              borderColor="black"
              focusBorderColor="#1A202C"
              value={User}
              onChange={(e) => {
                setUser(e.target.value)
              }}

              
            />
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              borderColor="black"
              focusBorderColor="#1A202C"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <p
            { 
              ...(isError ? {display: 'block'} : {display: 'none'})
            }
              color="red"
             >{errorMessage}</p>
           <Button type="submit" marginTop="30px">Entrar</Button>
          </form>
          
        </Box>
      </Box>
    </HStack>
  )
}

export default Login
