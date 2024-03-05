import React from "react";
import PageFrame from "../../Components/PageFrame";
import Header from "../../Components/Header";
import TableComponent from "../../Components/Tabelas/TableCliente";
import { Box, Flex, Input } from "@chakra-ui/react";
import ModalNovoCliente from "../../Components/Modals/ModalNewCliente";

//TODO Fazer com que cada fileira da tabela seja clicavel e redirecione para a pagina de detalhes do cliente OU abrir um modal com os detalhes do cliente


const Cliente = () => {



    return(
        <div>
            <Header/>
            <PageFrame>


                
                <Flex
                    display={'flex'}
                    flexDirection={'column'}
                    margin={'10px'}
                    w={'100%'}
                    h={'80%'}
                >
                <Flex
                    
                    w={'100%'}
                    h={'10%'}
                >
                    <Input 
                    placeholder='Basic usage'
                    border='1px'
                    focusBorderColor='gray.900'
                    bg={'white'}
                    width={'20%'}
                    margin={'10px'}/>

                    <Box
                        marginLeft="80%"
                        marginTop={'10px'}
                    >
                        <ModalNovoCliente />
                    </Box>
                    

                </Flex>

                    <TableComponent/>
                    
                </Flex>

                
            </PageFrame>
        </div>
    );
}

export default Cliente;