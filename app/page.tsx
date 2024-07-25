"use client";
import Line from "@/components/line";
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";
import About from "@/layouts/about";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";
import Products from "@/layouts/products";
import Testimonies from "@/layouts/testimonies";
import TheProcess from "@/layouts/theProcess";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Box>
          <Box height={{ lg: "100vh", md: "100vh", sm: "100%", base: "100%" }}>
            <Box px={{ lg: 20, md: 10, sm: 5, base: 5 }} pt={10}>
              <Header />
              <Hero />
            </Box>
            <Line />
          </Box>
          <Box mt={100} px={{ lg: 40, md: 5, sm: 5, base: 5 }}>
            <Products mt={200} />
            <TheProcess />
            <About />
            <Products mt={100} />
          </Box>
          <Testimonies />
          <Footer />
        </Box>
      </CartProvider>
    </AuthProvider>
  );
};

export default page;
