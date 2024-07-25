"use client";
import CartItem from "@/components/cartItem";
import Logo from "@/components/logo";
import { AuthContext, useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
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
  Skeleton,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import {
  Google,
  HambergerMenu,
  Logout,
  ShoppingCart,
  Wallet,
} from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PaymentAction from "./paymentAction";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  ratting: number;
  image: string;
  createdAt: string;
}

interface User {
  id: string | null;
  username: string | null;
  email: string | null;
}

interface Cart {
  id: string;
  user: User;
  userId: string;
  createdAt: string;
  product: Product;
  productId: string;
  quantity: number;
}
const Header = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [tot, setTot] = useState<number>(0);
  const [carts, setCarts] = useState<Cart[] | null>([]);

  const { cart, total } = useCart();

  const fetchCart = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const response = await axios.get(`/api/cart/${userId}`, {
          withCredentials: true,
          headers: {
            // Any additional headers can be added here
          },
        });
        setCarts(response.data.orders);
        getTotal();
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const getTotal = () => {
    carts?.map((cart, key) => {
      setTot(tot + Number(cart.product.price * Number(cart.quantity)));
    });
  };

  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Logo />
        <Flex
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
          gap={20}
          alignItems={"center"}
        >
          <Text>
            <Link href="#products">Product</Link>
          </Text>
          <Text>
            <Link href="#">The Process</Link>
          </Text>
          <Text>
            <Link href="#about">About</Link>
          </Text>
          <Text>
            <Link href="#customer">Review</Link>
          </Text>
          <Text>
            <Link href="#footer">Contact Us</Link>
          </Text>
        </Flex>

        <Flex
          display={{ lg: "flex", md: "flex", sm: "flex", base: "flex" }}
          gap={{ lg: 10, md: 9, sm: 5, base: 5 }}
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
              display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
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
        </Flex>
      </Flex>
      <>
        <Drawer isOpen={isOpen} placement="right" size={"lg"} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            width={{
              lg: "1500px !important",
              md: "1400px !important",
              sm: "auto",
              base: "auto",
            }}
          >
            <DrawerHeader borderBottomWidth={"1px"}>
              <Flex alignItems={"center"} gap={3}>
                <DrawerCloseButton mt={4} size={"lg"} />
                <ShoppingCart size={40} />
                <Text fontSize={40}>Cart</Text>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              {cart?.length > 0 ? (
                cart.map((c: any, key: any) => (
                  <CartItem
                    key={key}
                    description={c.product.description}
                    quantity={c.quantity}
                    image={c.product.image}
                    id={c.id}
                    productId={c.product.id}
                    name={c.product.name}
                    price={c.product.price}
                  />
                ))
              ) : cart === null ? (
                <Skeleton height={100} />
              ) : (
                <Heading>NO CART YET</Heading>
              )}
            </DrawerBody>
            <DrawerFooter>
              <Flex
                width={"100%"}
                justifyContent={"space-between"}
                fontSize={40}
              >
                <Text>Total</Text>
                <Text>$ {total}</Text>
              </Flex>
            </DrawerFooter>
            <DrawerFooter>
              <PaymentAction total={total} />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Header;
