"use client";
import Product from "@/components/product";
import { Box, Center, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  ratting: Number;
  createdAt: Date;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response: any = await axios.get("/api/product", {
        withCredentials: true,
        headers: {
          // Any additional headers can be added here
        },
      });
      console.log(response.data.products);
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <Box mt={{ lg: 100, md: 200, sm: 100, base: 100 }}>
      <Flex justifyContent={"center"}>
        <Box textAlign={"center"}>
          <Heading fontSize={{ lg: 70, md: 40, sm: 40, base: 40 }}>
            Explore the recent products
          </Heading>
          <Center>
            <Text
              fontSize={{ lg: "25px", md: 20, sm: 20, base: 20 }}
              width={{ lg: 800, md: "100%", sm: "100%", base: "100%" }}
              textAlign={"center"}
              py={2}
            >
              Our delectable drink options, including classic espresso choices,
              house specialties, fruit smotheies and frozen treats
            </Text>
          </Center>
        </Box>
      </Flex>

      <Box my={100}>
        <Flex gap={20} flexWrap={"wrap"} justifyContent={"center"}>
          {products ? (
            products.map((product: Product, key: any) => (
              <Product
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                key={key}
              />
            ))
          ) : (
            <Skeleton height={"50px"} />
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Products;
