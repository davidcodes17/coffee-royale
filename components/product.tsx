"use client";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { ArrowLeft, ArrowRight, Heart } from "iconsax-react";
import React from "react";

const Product = (props: {
  id: string;
  name: string;
  image: string;
  price: string;
}) => {
  const { addToCart } = useCart();
  return (
    <Box
      border={"2px solid #BB7A42"}
      borderRadius={20}
      p={5}
      position={"relative"}
      mt={10}
      cursor={"pointer"}
      _hover={{
        bg: "#fff",
        boxShadow: "10px -10px 1px #BB7A42",
        transition: "all .4s",
      }}
      width={300}
      textAlign={"center"}
    >
      <Image
        position={"absolute"}
        top={-20}
        left={"50px"}
        width={"200px"}
        height={"200px"}
        objectFit={"cover"}
        zIndex={99}
        borderRadius={30}
        src={props.image}
      />
      <Text mt={120}>Blend</Text>
      <Text fontSize={20} fontWeight={700}>
        {props.name}
      </Text>
      <Text fontSize={40} fontWeight={800}>
        £ {props.price}
      </Text>
      <Flex
        mt={5}
        justifyContent={"space-between"}
        px={5}
        alignItems={"center"}
      >
        <Button
          rightIcon={<ArrowRight />}
          onClick={() => {
            addToCart(props.id, 1);
          }}
          color={"#BB7A42"}
          bg={"none"}
          _hover={{ bg: "none" }}
        >
          Add to Cart
        </Button>
        <Box>
          <Heart />
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;
