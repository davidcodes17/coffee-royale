"use client";
import CartItem from "@/components/cartItem";
import Logo from "@/components/logo";
import { AuthContext, useAuth } from "@/context/authContext";
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spinner,
  Avatar,
} from "@chakra-ui/react";
import {
  Google,
  HambergerMenu,
  Logout,
  ShoppingCart,
  Wallet,
} from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  ratting: number;
  image: string;
  createdAt: string;
}

const Header = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Logo />
        <Box
          cursor={"pointer"}
          display={{ lg: "none", md: "block", sm: "block", base: "block" }}
        >
          <HambergerMenu size={40} />
        </Box>
        <Flex
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          gap={20}
          alignItems={"center"}
        >
          <Text>
            <Link href="/">Product</Link>
          </Text>
          <Text>
            <Link href="/">Special Offers</Link>
          </Text>
          <Text>
            <Link href="/">The Process</Link>
          </Text>
          <Text>
            <Link href="/">Packing</Link>
          </Text>
          <Text>
            <Link href="/">About</Link>
          </Text>
        </Flex>

        <Flex
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          gap={10}
          alignItems={"center"}
        >
          <Box
            bg={"#74422D"}
            p={3}
            color={"#fff"}
            borderRadius={40}
            cursor={"pointer"}
            onClick={() => {
              localStorage.clear();
              location.replace("/login");
            }}
          >
            <Logout variant="Bold" />
          </Box>
          <Box
            ref={btnRef}
            onClick={onOpen}
            bg={"#74422D"}
            p={3}
            color={"#fff"}
            cursor={"pointer"}
            borderRadius={40}
          >
            <ShoppingCart />
          </Box>
          {user != null ? (
            <Avatar
              cursor={"pointer"}
              bg={"#74422D"}
              color={"#fff"}
              size={"md"}
              name={user?.username || "Mercy David"}
            />
          ) : (
            <Button
              color={"#fff"}
              borderRadius={100}
              _hover={{ bg: "#74422D" }}
              py={6}
              px={7}
              onClick={() => {
                router.push("/login");
              }}
              bg={"#74422D"}
            >
              Login / Sign up
            </Button>
          )}
          {/* <img src="/ddd.png" alt="" /> */}
        </Flex>
      </Flex>
      <>
        <Drawer isOpen={isOpen} placement="right" size={"lg"} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent width={"1500px !important"}>
            <DrawerHeader borderBottomWidth={"1px"}>
              <Flex alignItems={"center"} gap={3}>
                <DrawerCloseButton mt={4} size={"lg"} />
                <ShoppingCart size={40} />
                <Text fontSize={40}>Cart</Text>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <CartItem
                image="http://localhost:3000/coffe-cup.jpg"
                name="Food APp"
                price="3000"
              />
            </DrawerBody>
            <DrawerFooter>
              <Flex
                width={"100%"}
                justifyContent={"space-between"}
                fontSize={40}
              >
                <Text>Total</Text>
                <Text>$9000</Text>
              </Flex>
            </DrawerFooter>
            <DrawerFooter>
              <Button
                width={"100%"}
                py={8}
                bg={"#74422D"}
                onClick={() => {
                  setLoading(!loading);
                }}
                color={"#fff"}
                leftIcon={<Wallet />}
                _hover={{ bg: "#74422D" }}
              >
                {loading ? <Spinner /> : "Pay Now"}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Header;
