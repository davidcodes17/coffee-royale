import {
  Box,
  CloseButton,
  Flex,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { AddCircle, MinusCirlce } from "iconsax-react";
import React from "react";

const CartItem = (props: { name: string; price: string; image: string }) => {
  return (
    <Box
      bg={"#FCF9F8"}
      my={5}
      px={5}
      py={5}
      borderRadius={20}
      cursor={"pointer"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Image borderRadius={10} width={100} src="coffee-package.jpg" />
        <Box>
          <Text fontWeight={600}>{props.name}</Text>
          <Text>400ml</Text>
        </Box>
        <Box>
          <NumberInput defaultValue={0} min={0} max={10}>
            <NumberInputField width={100} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box>
          <Text fontSize={20}>${props.price}</Text>
        </Box>
        <Box>
          <CloseButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartItem;
