import React from "react";
import Header from "../../Components/Header";
import PageFrame from "../../Components/PageFrame";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ClienteForm from "../../Components/Formularios/ClienteForm";

const NovoCliente = () => {
  return (
    <div>
      <Header />
      <PageFrame>
        <Flex display={"flex"} flexDirection={"column"} w={"100%"} h={"100%"}>
          <Flex
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            w={"100%"}
            h={"5%"}
          >
            <Box marginLeft={"90%"}>
              <Link to={"/cliente"}>
                <Button>Voltar</Button>
              </Link>
            </Box>
          </Flex>
          <Flex
            display={"flex"}
            flexDirection={"column"}
            bg={"blue.200"}
            w={"100%"}
            h={"90%"}
            p={4}
            borderRadius={"10px"}
          >
            <ClienteForm />
          </Flex>
        </Flex>
      </PageFrame>
    </div>
  );
};

export default NovoCliente;
