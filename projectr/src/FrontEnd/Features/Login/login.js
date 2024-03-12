import React from 'react'
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
import NavLeft from '../../Components/Nav/NavLeft'

const Login = () => {
  
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
        <NavLeft />
      </VStack>

      <Box
        border="0px"
        spacing={4}
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
        <Box display="flex" alignItems="center">
          <FormControl marginTop="40px">
            <FormLabel>Usuário</FormLabel>
            <Input
              type="text"
              borderColor="black"
              focusBorderColor="#1A202C"
              
            />
            <FormErrorMessage>Usuário inválido</FormErrorMessage>

            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              borderColor="black"
              focusBorderColor="#1A202C"
            />
            <FormErrorMessage>Usuário inválido</FormErrorMessage>
          </FormControl>
        </Box>
        <Button type="submit" marginTop="30px">
          Entrar
        </Button>
      </Box>
    </HStack>
  )
}

export default Login