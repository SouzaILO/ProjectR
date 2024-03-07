import React from "react";
import {
  Flex,
  Text,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";

const CardsHome = () => {
  return (
    <SimpleGrid
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      marginTop={"5%"}
      w={"100%"}
      h={"25%"}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md">Clientes</Heading>
        </CardHeader>
        <CardBody>
          <Text>Achar todos os clientes.</Text>
        </CardBody>
        <CardFooter>
          <Button>Achar Cliente</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Funcionarios</Heading>
        </CardHeader>
        <CardBody>
          <Text>Achar Todos os Funcionarios.</Text>
        </CardBody>
        <CardFooter>
          <Button>Achar Funcionario</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Agenda</Heading>
        </CardHeader>
        <CardBody>
          <Text>Vizualizar a Agenda.</Text>
        </CardBody>
        <CardFooter>
          <Button>Olhar agenda</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Serviços</Heading>
        </CardHeader>
        <CardBody>
          <Text>Vizualizar os serviços.</Text>
        </CardBody>
        <CardFooter>
          <Button>Olhar serviços</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default CardsHome;
