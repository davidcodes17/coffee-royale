import Logo from "@/components/logo";
import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Send, Send2, Whatsapp } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box
      id="footer"
      bg={"#F3E2DD"}
      p={20}
      px={{ lg: 20, md: 10, sm: 10, base: 10 }}
    >
      <Flex gap={{ lg: 40, md: 10, sm: 10, base: 10 }} flexWrap={"wrap"}>
        <Box>
          <Logo />
          <Box my={2}>
            <Text>+1 (787) 966-74-75 +1 (212) 933-90-60</Text>
            <Text>Fife</Text>
            <Text>info@cart-royal.com</Text>
          </Box>
          <Flex mb={2} gap={5}>
            <Instagram size={30} />
            <Facebook size={30} />
            <Whatsapp size={30} />
          </Flex>
          <Text>&copy; All rights reserved Café Royale</Text>
        </Box>
        <Box>
          <Text fontSize={40}>Café Royale</Text>
          <Box>
            <Text>Home</Text>
            <Text>Products</Text>
            <Text>Special Offers</Text>
            <Text>The Process</Text>
            <Text>Packing</Text>
            <Text>About</Text>
          </Box>
        </Box>
        <Box width={{ lg: "500px", md: "100%", sm: "100%", base: "100%" }}>
          <Text fontSize={"30px"}>Subscribe to Our News Letter</Text>
          <Text>
            Subscribing to the Cafe Royal newsletter keeps me updated on the
            latest promotions and new flavors. It’s the best way to stay
            connected with my favorite coffee brand.
          </Text>
          <Flex
            mt={2}
            alignItems={"center"}
            border={"2px solid #300809"}
            borderRadius={"15px"}
            justifyContent={"space-between"}
            p={2}
          >
            <Input
              border={"none"}
              _focus={{ boxShadow: "none" }}
              width={500}
              placeholder="you@gmail.com"
              py={6}
            />
            <Box
              bg={"#300809"}
              color={"#fff"}
              p={3}
              cursor={"pointer"}
              borderRadius={10}
            >
              <Send2 />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
