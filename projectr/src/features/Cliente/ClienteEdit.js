import React from "react";
import Header from "../../Components/Header";
import PageFrame from "../../Components/PageFrame";
import { useParams } from "react-router";
import { Box, Text } from "@chakra-ui/react";
import { PegarClientePorId } from "./ClienteTS.ts";

const ClienteEdit = () => {
  const { id } = useParams();
  const Cliente = PegarClientePorId(id);

  return (
    <div>
      <Header />
      <PageFrame>
        {Cliente.map((clienteMapa, index) => {
          return (
            <Box key={clienteMapa.id}>
              <Text>Cliente ID: {clienteMapa.id}</Text>
              <Text>Nome: {clienteMapa.nome}</Text>
              <Text>CPF: {clienteMapa.cpf}</Text>
              <Text>Telefone: {clienteMapa.phone}</Text>
              <Text>Email: {clienteMapa.email}</Text>
            </Box>
          );
        })}
      </PageFrame>
    </div>
  );
};

export default ClienteEdit;
