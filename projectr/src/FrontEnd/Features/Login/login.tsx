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
import login from '../../../Server/Features/Login/Login.ts'

const Login = () => {

  const [User, setUser] = useState('')
  const [Password, setPassword] = useState('')
  const [Erro, setError] = useState('')

  

  const handleSubmit = (event) => {
    event.preventDefault()
    const Login = {
      User: User,
      Password: Password
    }
    login(Login)
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
          <form onSubmit={handleSubmit}>
          <FormErrorMessage>{Erro}</FormErrorMessage>
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
           <Button type="submit" marginTop="30px">Entrar</Button>
          </form>
        </Box>
      </Box>
    </HStack>
  )
}

export default Login
