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
    username: "",
  });
  const handleSignup = () => {
    setLoading(true);
    axios
      .post("/api/auth/signup", {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.status != 200) {
          toast({
            title: "Account Created",
            description: response.data.error,
            status: "error",
            duration: 2000,
            position: "top-right",
          });
          setLoading(true);
        } else {
          toast({
            title: "Account Creation Failed",
            description: "Account Created Successfully",
            status: "success",
            duration: 2000,
            position: "top-right",
          });
          setLoading(false);
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
          pt={70}
          px={{ lg: 40, md: 10, sm: 0, base: 0 }}
        >
          <Heading fontSize={50}>Create Account</Heading>
          <Text fontSize={20} mt={4}>
            Straight to your doorstep. We don't roast our beans until we have
            your order. Every order is roasted and shipped the same day
          </Text>

          <Box mt={5}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="you@coffeeroyal"
                border={"2px solid #74422D"}
                value={user.username}
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
                py={7}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="you@gmail.com"
                border={"2px solid #74422D"}
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                py={7}
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                fontWeight={900}
                letterSpacing={0}
                placeholder="***********************"
                border={"2px solid #74422D"}
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                py={7}
              />
            </FormControl>
            <Button
              mt={7}
              width={"100%"}
              py={8}
              bg={"#74422D"}
              onClick={() => {
                handleSignup();
              }}
              _hover={{ bg: "#74422D" }}
              color={"#fff"}
            >
              {loading ? <Spinner /> : "Sign up"}
            </Button>
            <Link href="/login">
              <Text mt={5} textAlign={"center"}>
                Already have an account? Login
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
