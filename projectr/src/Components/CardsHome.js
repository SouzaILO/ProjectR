import React from "react";
import {
  Text,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardsHome = (Info) => {
  return (
    <SimpleGrid
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      marginTop={"5%"}
      w={"100%"}
      h={"35%"}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card h={"100%"}>
        <CardHeader>
          <Heading size="md">{Info.Head}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{Info.Body}</Text>
        </CardBody>
        <CardFooter>
          <Link to={Info.Link}>
            <Button>{Info.Button}</Button>
          </Link>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default CardsHome;
