import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Line = () => {
  return (
    <Box mt={"60px"}>
      <Flex
        py={10}
        justifyContent={"space-between"}
        mt={5}
        flexWrap={"wrap"}
        px={10}
        gap={5}
        bg={"#BB7A42"}
      >
        <Heading>Café Royale</Heading>
        <Heading>Café Royale</Heading>
        <Heading>Café Royale</Heading>
        <Heading>Café Royale</Heading>
        <Heading>Café Royale</Heading>
        <Heading>Café Royale</Heading>
      </Flex>
    </Box>
  );
};

export default Line;
