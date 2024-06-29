"use client";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import {
  Box,
  CloseButton,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CartItem = (props: {
  name: string;
  price: number; // Changed to number type
  image: string;
  description: string;
  id: string;
  productId: string;
  quantity: number;
}) => {
  const [quantity, setQuantity] = useState<number>(props.quantity);
  const { updateCartItem, removeFromCart } = useCart();

  // Update the quantity in the cart and set the total
  const handleQuantityChange = (value: string) => {
    const newQuantity = Number(value);
    setQuantity(newQuantity);
    updateCartItem(props.id, newQuantity);
  };

  return (
    <Box bg={"#FCF9F8"} my={5} px={5} py={5} borderRadius={20}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Image
          borderRadius={10}
          objectFit={"cover"}
          width={100}
          src={props.image}
          height={70}
        />
        <Box>
          <Text fontWeight={600}>{props.name}</Text>
          <Text>{props.description}</Text>
        </Box>
        <Box>
          <NumberInput
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={10}
          >
            <NumberInputField width={100} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box>
          <Text fontSize={20}>${props.price * quantity}</Text>
        </Box>
        <Box>
          <CloseButton onClick={() => removeFromCart(props.id)} />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartItem;
