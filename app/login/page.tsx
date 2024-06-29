"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const url = "/api/auth/login";
  const handleLogin = () => {
    axios
      .post("/api/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.error) {
          setLoading(false);
          toast({
            title: "Login Failure",
            description: response.data.error,
            status: "error",
            duration: 2000,
            position: "top-right",
          });
        } else {
          toast({
            title: "Login Success",
            description: "Login Successfully",
            status: "success",
            duration: 2000,
            position: "top-right",
          });
          navigate.push("/");
        }
      });
  };
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        px={{ lg: 100, md: 10, sm: 10, base: 10 }}
        py={10}
        gap={100}
      >
        <Image
          src="/coffe-cup.jpg"
          height={"90vh"}
          display={{ lg: "block", md: "none", sm: "none", base: "none" }}
          objectFit={"cover"}
          width={"40vw"}
          borderRadius={40}
        />
        <Box
          width={{ lg: "50vw", md: "100vw", sm: "100vw", base: "100vw" }}
          pt={100}
          px={{ lg: 40, md: 10, sm: 0, base: 0 }}
        >
          <Heading fontSize={50}>Login Page</Heading>
          <Text fontSize={20} mt={4}>
            Straight to your doorstep. We don't roast our beans until we have
            your order. Every order is roasted and shipped the same day
          </Text>

          <Box mt={5}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                placeholder="you@gmail.com"
                border={"2px solid #74422D"}
                py={7}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                fontWeight={900}
                letterSpacing={0}
                placeholder="***********************"
                border={"2px solid #74422D"}
                py={7}
              />
            </FormControl>
            <Link>
              <Text textAlign={"right"} mt={5}>
                Forgotten Password?
              </Text>
            </Link>
            <Button
              mt={5}
              width={"100%"}
              py={8}
              bg={"#74422D"}
              onClick={() => {
                setLoading(!loading);
                handleLogin();
              }}
              _hover={{ bg: "#74422D" }}
              color={"#fff"}
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
            <Link href="/signup">
              <Text mt={5} textAlign={"center"}>
                Don't have an account? Sign up
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
