import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Td,
    TableCaption,
    TableContainer,

  } from '@chakra-ui/react'

  // Componente que renderiza uma tabela com os dados passados por props
    // Exemplo de uso:
    

    // const Horarios = [
    //     {horario: '08:00'},
    //     {horario: '09:00'},
    //     {horario: '10:00'},
    //     {horario: '11:00'},
    //     {horario: '12:00'},
    //     {horario: '13:00'},
    //     {horario: '14:00'},
    //     {horario: '15:00'},
    //     {horario: '16:00'},
    //     {horario: '17:00'},
    //     {horario: '18:00'},
    // ]

    const Clientes = [
        {nome: 'João', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Maria', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'José', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Ana', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Paulo', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Pedro', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Carlos', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Lucas', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Lucas', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Lucas', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Lucas', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Paulo', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'},
        {nome: 'Pedro', cpf: '123.456.789-00', endereco: 'Rua 1, 123', telefone: '1234-5678', email: 'Teste@test.com'}
    ]


const TableComponent = () => {

    return(
            <TableContainer  border={'1px'} padding={'5px'} width={'100%'} overflowY={'auto'}>
            <Table variant='striped' colorScheme='teal' bg={'white'}>
                <TableCaption>Tabela de Cliente</TableCaption>
                <Thead>
                    <Tr>
                        {/*Cabecalho*/} 
                        <Td>
                            Nome
                        </Td>
                        <Td>
                            CPF
                        </Td>
                        <Td>
                            Endereço
                        </Td>
                        <Td>
                            Telefone
                        </Td>
                        <Td>
                            Email
                        </Td>
                    </Tr>
                </Thead>
                <Tbody>     

                    {Clientes.map((cliente, index) => {
                        return(
                            <Tr key={index}>
                                <Td>
                                    {cliente.nome}
                                </Td>
                                <Td>
                                    {cliente.cpf}
                                </Td>
                                <Td>
                                    {cliente.endereco}
                                </Td>
                                <Td>
                                    {cliente.telefone}
                                </Td>
                                <Td>
                                    {cliente.email}
                                </Td>
                            </Tr>
                        );
                    }
                    )}

                </Tbody>
                <Tfoot>
                    <Tr>
                        {/*Rodape*/}
                    </Tr>
                </Tfoot>
            </Table>
            </TableContainer>
    );
}

export default TableComponent;