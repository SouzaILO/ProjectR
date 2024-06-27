import React, { useState } from 'react'
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword,signInWithPopup, getAuth,GoogleAuthProvider} from 'firebase/auth'
import SetUserRedux from '../../../Server/DataBase/UserInfo.ts'

  

const Login = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [User, setUser] = useState('')
  const [Password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isError, setIsError] = useState(false)


  const handleGoogleLogin = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider() // Add this line to create a new instance of GoogleAuthProvider
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
      await signInWithEmailAndPassword(auth, User, Password)
      
      SetUserRedux()

      navigate('/')
  
    } catch (error) {
      console.log(error)
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
        <Box display="flex" alignItems="center">
          <form  onSubmit={handleSubmit}>

          
            <FormLabel>Usuário</FormLabel>
            <Input
              type="text"
              borderColor="black"
              focusBorderColor="#1A202C"
              value={User}
              autoComplete='on'
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
              autoComplete='on'
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
           <Button 
           ml={'30%'}
           type="submit" marginTop="30px">Entrar</Button>

          </form>

          {



          }
          
          
        </Box>
             <Button mt={'10px'}
              onClick={handleGoogleLogin}
             >
              Login com Google
            </Button>
      </Box>
    </HStack>
  )
}

export default Login
