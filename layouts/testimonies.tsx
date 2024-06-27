import Testimony from "@/components/testimony";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Testimonies = () => {
  return (
    <Box px={{ lg: 100, md: 50, sm: 5, base: 5 }} pb={100}>
      <Heading
        fontSize={{ lg: 60, md: 40, sm: 40, base: 40 }}
        pb={10}
        textAlign={"center"}
      >
        Testimonies
      </Heading>
      <Flex borderRadius={40} overflowX={"scroll"} gap={10} width={"100%"}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </Flex>
    </Box>
  );
};

export default Testimonies;
