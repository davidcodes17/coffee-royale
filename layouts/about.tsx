import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

const About = () => {
  return (
    <Box
      bg={"#F3E2DD"}
      borderRadius={20}
      my={{ lg: 10, md: "30px", sm: "30px", base: "30px" }}
      width={"100%"}
      id="about"
      py={{ lg: 10, md: 20, sm: 20, base: 20 }}
      px={{ lg: 200, md: 100, sm: 10, base: 10 }}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Heading
            my={5}
            fontSize={{ lg: 60, md: 50, sm: "40px", base: "40px" }}
          >
            Check out our <br /> best Coffee Beans
          </Heading>
          <Button
            mt={5}
            bg={"#74422D"}
            py={{ lg: 8, md: 6, sm: 6, base: 6 }}
            borderRadius={40}
            px={{ lg: 10, md: 6, sm: 6, base: 6 }}
            color={"#fff"}
            rightIcon={<ArrowRight2 />}
            _hover={{ bg: "#74422D" }}
          >
            Explore our products
          </Button>
        </Box>
        <Image
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          width={{ lg: "30%", md: "25%" }}
          src="/coffee-beans.png"
        />
      </Flex>
    </Box>
  );
};

export default About;
