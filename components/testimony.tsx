import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "iconsax-react";
import React from "react";

const Testimony = () => {
  return (
    <Box minW={500} bg={"#F3E2DD"} p={10} borderRadius={20} width={500}>
      {/* <Image /> */}
      <Flex alignItems={"center"} gap={5}>
        <Box
          // border={"2px solid #300809"}
          bg={"#300809"}
          width={"fit-content"}
          p={2}
          borderRadius={40}
        >
          <User color="#fff" size={40} variant="Bold" />
        </Box>
        <Box>
          <Text fontWeight={800} fontSize={20}>
            Areegbe David
          </Text>
          <Text>CEO David_Code</Text>
        </Box>
      </Flex>
      <Text fontWeight={500} py={5}>
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet
        suscipit ducimus consectetur magni tempore, minus quidem dolor at
        dignissimos libero provident adipisci? Labore incidunt impedit ab ad?
        Temporibus, ab!”
      </Text>
    </Box>
  );
};

export default Testimony;
