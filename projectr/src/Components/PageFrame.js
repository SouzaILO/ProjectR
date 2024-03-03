import {  HStack, VStack } from "@chakra-ui/react";
import React from "react";
import NavLeft from "./NavLeft";
import Header from "./Header";
//TODP: Criar um componente que será o frame de todas as páginas
// Esse componente terá um menu lateral e um header
// O menu lateral será um componente separado para melhor controle
// O header será um componente separado
// O conteúdo da página será passado como children

const PageFrame= () => {

    return(
        <HStack
        display="flex"
        alignItems="left"
        justifyContent=""
        w="100%"
        h="100vh"
        backgroundColor="#4A5568"
        >
            <VStack
            id="navleft"
            margin={'10px'}
            >
                <NavLeft/>
            </VStack>
        </HStack>

    );
}

export default PageFrame;