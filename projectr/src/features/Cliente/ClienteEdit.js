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
    <div width={"100%"} height={"100%"}>
      <Header />
      <PageFrame>
        {Cliente.map((clienteMapa) => {
          return (
            <Box w={"100%"} h={"100%"} bg={"blue.100"}>
              <Text>Cliente ID: {clienteMapa.Matricula}</Text>
              <Text>Nome: {clienteMapa.nome}</Text>
              <Text>Sexo: {clienteMapa.sexo}</Text>
              <Text>Data de Nascimento: {clienteMapa.dataNascimento}</Text>
              <Text>Responsavel: {clienteMapa.responsavel}</Text>
              <Text>
                Estabelecimento de Ensino: {clienteMapa.estabelecimentoEnsino}
              </Text>
              <Text>Status: {clienteMapa.status}</Text>
              <Text>nivelEscolar: {clienteMapa.nivelEscolar}</Text>
            </Box>
          );
        })}
      </PageFrame>
    </div>
  );
};

export default ClienteEdit;
