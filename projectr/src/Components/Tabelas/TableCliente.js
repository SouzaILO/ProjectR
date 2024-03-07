import React from "react";
import { FiltrarClienteLogic } from "../../features/Cliente/ClienteTS.ts";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import Clientes from "../../Json/Clientes.json";

// Componente que renderiza uma tabela com os dados passados por props
// Exemplo de uso:

const TableComponent = (Filtro) => {
  const Clientes = FiltrarClienteLogic(Filtro);
  Clientes.sort((a, b) => (a.nome > b.nome ? 1 : -1));

  return (
    <TableContainer
      border={"0px"}
      padding={"5px"}
      width={"100%"}
      overflowY={"hidden"}
    >
      <Table
        variant="striped"
        bg={"white"}
        h={"100%"}
        borderRadius={"5px"}
        colorScheme="blue"
      >
        <TableCaption>Tabela de Cliente</TableCaption>
        <Thead>
          <Tr>
            {/*Cabecalho*/}
            <Td>Nome</Td>
            <Td>CPF</Td>
            <Td>Telefone</Td>
            <Td>Email</Td>
          </Tr>
        </Thead>
        <Tbody>
          {Clientes.map((cliente, index) => {
            return (
              index < 10 && (
                <Tr key={cliente.id}>
                  <Td>
                    <Link to={"/cliente/" + cliente.id}>{cliente.nome}</Link>
                  </Td>
                  <Td>
                    <Link to={"/cliente/" + cliente.id}>{cliente.cpf}</Link>
                  </Td>
                  <Td>
                    <Link to={"/cliente/" + cliente.id}>{cliente.phone}</Link>
                  </Td>
                  <Td>
                    <Link to={"/cliente/" + cliente.id}>{cliente.email}</Link>
                  </Td>
                </Tr>
              )
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
