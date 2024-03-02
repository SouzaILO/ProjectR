import React, { useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import * as Yup from 'yup';
  import { useFormik } from "formik";
import { blue } from "@mui/material/colors";
//import {resolucaoLogo} from "../../img/resolucaologo.png";





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
    <div className="Login">
        <VStack spacing={4} align="center" backgroundColor="lightblue" maxWidth="500px" minHeight="500px" >
            <FormControl marginTop="100px">
                <FormLabel>Usuário</FormLabel>
                <Input type="text" placeholder="Digite seu usuário" />

                <FormLabel>Senha</FormLabel>
                <Input type="password" placeholder="Digite sua senha" />
            </FormControl>
            <Button type="submit" colorScheme="blue" variant="solid" marginTop="10px">
                    Entrar
                </Button>
        </VStack>
    </div>

    )   
 }

export default Login;