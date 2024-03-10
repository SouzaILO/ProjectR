import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Sexo,
  Status,
  nivelEscolar,
  anoEscolar,
  Cliente,
} from "../../Data/ClienteData.js";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
// Componente que renderiza um formulario para adicionar um novo cliente
// Exemplo de uso:
//
/*
    CAMPOS DO FORMULARIO:
    -Nome
    -Matricula(Gerado pelo systema)
    -Sexo
    -Data de nascimento
    -Responsavel(Pai, Mae, Responsavel Legal,Responsavel Financeiro, Outro)
    -Endereco(Ligado ao responsavel)
    -Estabelecimento de Ensino(escola)
    -Ano Escolar (Ex: 1º ano B)
    -Status (Ativo, Inativo)
    

 */

const NovoCliente = () => {
  const [FormCliente, setFormCliente] = useState({
    nome: "",
    sexo: "",
    dataNascimento: "",
    responsavel: "",
    endereco: "",
    estabelecimentoEnsino: "",
    nivelEscolar: "",
    anoEscolar: "",
    status: "Ativo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    FormCliente.Matricula = Cliente.length + 1;
    Cliente.push(FormCliente);
    console.log(FormCliente);
    redirect("/cliente");
  };

  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      bg={"blue.200"}
      w={"100%"}
      h={"100%"}
      p={4}
      borderRadius={"10px"}
    >
      <Flex w={"100%"} bg={"blue.200"}>
        <form onSubmit={handleSubmit}>
          <FormControl id="nome">
            <FormLabel>Nome</FormLabel>
            <Input
              bg={"white"}
              type="text"
              name="nome"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, nome: e.target.value })
              }
              value={FormCliente.nome}
            />
            <FormErrorMessage>{}</FormErrorMessage>
          </FormControl>
          <FormControl id="sexo">
            <FormLabel>Sexo</FormLabel>
            <Select
              bg={"white"}
              name="sexo"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, sexo: e.target.value })
              }
              value={FormCliente.sexo}
            >
              {Sexo.map((sexo) => (
                <option key={sexo} value={sexo}>
                  {sexo}
                </option>
              ))}
            </Select>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl id="dataNascimento">
            <FormLabel>Data de Nascimento</FormLabel>
            <Input
              bg={"white"}
              type="date"
              name="dataNascimento"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  dataNascimento: e.target.value,
                })
              }
              value={FormCliente.dataNasciment}
            />
            <FormErrorMessage>{}</FormErrorMessage>
          </FormControl>
          <FormControl id="responsavel">
            <FormLabel>Responsavel</FormLabel>
            <Input
              bg={"white"}
              type="text"
              name="responsavel"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, responsavel: e.target.value })
              }
              value={FormCliente.responsavel}
            ></Input>
          </FormControl>
          <FormControl id="endereco">
            <FormLabel>Endereco</FormLabel>
            <Input
              bg={"white"}
              type="text"
              name="endereco"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, endereco: e.target.value })
              }
              value={FormCliente.endereco}
            />
          </FormControl>
          <FormControl id="estabelecimentoEnsino">
            <FormLabel>Estabelecimento de Ensino</FormLabel>
            <Input
              bg={"white"}
              type="text"
              name="estabelecimentoEnsino"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  estabelecimentoEnsino: e.target.value,
                })
              }
              value={FormCliente.estabelecimentoEnsino}
            />
          </FormControl>
          <FormControl id="nivelEscolar">
            <FormLabel>Nivel Escolar</FormLabel>
            <Select
              bg={"white"}
              name="nivelEscolar"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, nivelEscolar: e.target.value })
              }
              value={FormCliente.nivelEscolar}
            >
              {nivelEscolar.map((nivel) => (
                <option key={nivel} value={nivel}>
                  {nivel}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="anoEscolar">
            <FormLabel>Ano Escolar</FormLabel>
            <Select
              bg={"white"}
              name="anoEscolar"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, anoEscolar: e.target.value })
              }
              value={FormCliente.ano}
            >
              {anoEscolar.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="status">
            <FormLabel>Status</FormLabel>
            <Select
              bg={"white"}
              name="status"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, status: e.target.value })
              }
              value={FormCliente.status}
            >
              {Status.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            colorScheme="purple"
            width="full"
            isLoading={false}
          >
            Enviar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
export default NovoCliente;
