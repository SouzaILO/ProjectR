import React, { Component } from 'react'
import { 
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Select,
} from '@chakra-ui/react'
import { useState } from 'react'
import { redirect } from 'react-router-dom'
// Componente que renderiza um formulario para adicionar um novo cliente(Responsavel)




/*
Criar Registro de Responsaveis/ Editar Responsavel
Nome
cpf/cnpj
Data Nascimento(dd/mm/yyyy)
RG
email
celular
Endereco (Ligado ao aluno)
Dados sobre forma de pagamento(a definir)
*/



 const NovoResponsavel = () => {

    return(
        <Flex
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'blue.300'}
        w={'100%'}
        h={'100%'}
        p={4}
        borderRadius={'10px'}
      >
        <Flex w={'100%'} h={'100%'} bg={'blue.200'} justifyContent={'center'}>
        <form >
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={4}
                bg={'blue.200'}
                w={'100%'}
                h={'100%'}
                p={4}
                borderRadius={'10px'}
            >
                
                <FormControl id="nome">
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="cpf">
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="dataNascimento">
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input type="date" />
                </FormControl>
                <FormControl id="rg">
                    <FormLabel>RG</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="celular">
                    <FormLabel>Celular</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="endereco">
                    <FormLabel>Endereco</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="formaPagamento">
                    <FormLabel>Forma de Pagamento</FormLabel>
                    <Select placeholder="Selecione a forma de pagamento">
                        <option value="dinheiro">Dinheiro</option>
                        <option value="cartao">Cartão</option>
                        <option value="pix">Pix</option>
                    </Select>
                </FormControl>
                <FormControl id="status">
                    <FormLabel>Status</FormLabel>
                    <Select placeholder="Selecione o status">
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </Select>
                </FormControl>

                
            </Grid>
            </form>

        </Flex>
        <Button w={'30%'} type="submit" colorScheme="blue" size="lg">
                    Salvar
                </Button>

        </Flex>    )
}

export default NovoResponsavel