"use client";
import { useAuth } from "@/context/authContext";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <Box mt={{ lg: 50, md: 10, sm: 5, base: 5 }}>
      <Flex
        pr={5}
        alignItems={"center"}
        gap={{ lg: "120px", md: 10, sm: 10, base: 10 }}
        flexWrap={{ lg: "nowrap", md: "wrap", sm: "wrap", base: "wrap" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Heading
            fontSize={{ lg: 70, md: 70, sm: 70, base: 50 }}
            fontWeight={900}
          >
            Café Royale
          </Heading>
          <Text
            fontSize={{ lg: 40, md: "30px", sm: "30px", base: "30px" }}
            fontWeight={900}
          >
            Coffee With Royalty
          </Text>
          <Text fontSize={{ lg: "20px", md: 15, sm: 15, base: 12 }} py={5}>
            Straight to your doorstep. We don't roast our beans until we have
            your order. Every order is roasted and shipped the same day
          </Text>
          <Flex alignItems={"center"} gap={5}>
            <Button
              bg={"#74422D"}
              py={{ lg: 7, md: 6, sm: 6, base: 6 }}
              borderRadius={40}
              px={{ lg: 6, md: 5, sm: 5, base: 5 }}
              fontSize={{ lg: 12, md: 12, sm: 12, base: 12 }}
              color={"#fff"}
              rightIcon={<ArrowRight2 />}
              _hover={{ bg: "#74422D" }}
            >
              Explore our products
            </Button>
            {user != null ? null : (
              <Button
                border={"2px solid #74422D"}
                _hover={{
                  bg: "none",
                }}
                bg={"none"}
                py={{ lg: 6, md: 6, sm: 6, base: 6 }}
                display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
                px={{ lg: 7, md: 5, sm: 5, base: 5 }}
                borderRadius={40}
                onClick={() => {
                  router.push("/login");
                }}
                fontSize={{ lg: 12, md: 12, sm: 12, base: 12 }}
                color={"#74422D"}
              >
                Login / Sign up
              </Button>
            )}
          </Flex>
          <Flex mt={10}>
            <Box>
              <Text>Our Products</Text>
              <Heading mt={2} fontSize={40} fontWeight={900}>
                +7
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg"
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={{ lg: "100%", md: 200 }}
          width={{ lg: "40vw", md: "100%", sm: "100%", base: "100%" }}
          borderRadius={40}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
