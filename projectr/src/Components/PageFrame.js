import {  Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import NavLeft from "./NavLeft";
import Header from "./Header";
//TODP: Criar um componente que será o frame de todas as páginas
// Esse componente terá um menu lateral e o conteudo da pagina mudaado de aordo com os componentes filhos
// O menu lateral será um componente separado para melhor controle
// O header será um componente separado

const PageFrame= ({children}) => {
    
        return(
            <Flex>
            <Flex            
            w="100%"
            h="100vh"
            backgroundColor="gray.700"
            position={'fixed'}
            >

            
                <Flex
                id="MainContent"
                backgroundColor={'blue.200'}
                width={'100%'}
                height={'100%'}
                >
                    <NavLeft/>
                    {children}
                </Flex>


            </Flex>
            </Flex>
    
        );
    }



export default PageFrame;