import React, { useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import * as Yup from 'yup';
  import { useFormik } from "formik";
import  FullScreenSection  from "../../Components/fullscreen.js";

// "../../assets/resolucaoLogo.png";





const  Login = () => {


    const formik = useFormik({
        initialValues: {
          usuario: "",
          senha: "",
        },
        validationSchema: Yup.object({
          usuario: Yup.string().required("Campo obrigatório"),
          senha: Yup.string().required("Campo obrigatório"),
        }),
        onSubmit: (values) => {
          console.log(values);
        },
      });

    
      

    return(
      <HStack
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
      backgroundColor="#4A5568"
      >

      
        <Box border="0px" 
          spacing={4} 
          backgroundColor="#2B6CB0"
          minWidth="500px" minHeight="500px"
          borderRadius="30px"
          padding="30px"
          boxShadow='dark-lg' p='6'
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"

          >
            <Heading as="h1" size="2xl" color="#F7FAFC" marginTop="50px">
                ProjectR Login
            </Heading>
            <img src={require("../../assets/img/resolucaologo.png")} alt="resolucaoLogo" />
            <Box display="flex" alignItems="center" > 
                <FormControl  marginTop="40px">
                    <FormLabel>Usuário</FormLabel>
                    <Input type="text" placeholder="Digite seu usuário" />
                    <FormErrorMessage>Usuário inválido</FormErrorMessage>


                    <FormLabel>Senha</FormLabel>
                    <Input type="password" placeholder="Digite sua senha" />
                    <FormErrorMessage>Usuário inválido</FormErrorMessage>
                </FormControl>
            </Box>
            <Button type="submit" colorScheme="blue" variant="solid" marginTop="10px">
                        Entrar
                    </Button>
        </Box>
        </HStack>

    )   
 }

export default Login;