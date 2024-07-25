import {
  Box,
  Flex,
  Heading,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";

// Define the keyframes for the scroll animation
const scroll = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`;

// Extend the Chakra theme to include the keyframes animation
const theme = extendTheme({
  styles: {
    global: {
      "@keyframes scroll": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
});

const Line = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        mt="60px"
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
      >
        <Flex
          py={10}
          justifyContent="space-between"
          mt={5}
          flexWrap="wrap"
          px={10}
          gap={5}
          bg="#BB7A42"
        >
          <Box overflow="hidden" whiteSpace="nowrap">
            <Flex
              borderRadius={40}
              gap={10}
              animation="scroll 10s linear infinite"
              css={{
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
            >
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              {/* Duplicate the headings for continuous scroll */}
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              {/* Duplicate the headings for continuous scroll */}
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
              <Heading>Café Royale</Heading>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Line;
