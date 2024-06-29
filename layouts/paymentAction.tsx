"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Wallet } from "iconsax-react";
import { useAuth } from "@/context/authContext";

// Define a type for the metadata if needed
interface Metadata {
  name: string;
  phone: string;
}

const PaymentAction = (props: { total: number }) => {
  const { user } = useAuth();
  const publicKey =
    process.env.REACT_APP_PAYSTACK_PUBLIC_KEY ||
    "pk_test_9aa7874262b81466a56043bf23f7d2db60af9d2d";
  const amount = props.total * 1000; // Amount in kobo (e.g., ₦10,000 = 1,000,000 kobo)
  const toast = useToast();
  const name = user?.username;
  const phone = "+2349015061171";
  const email = user?.email;

  const handlePaymentSuccess = (reference: any) => {
    toast({
      title: "Payment successful!",
      description: "Thanks for doing business with us! Come back soon!!",
      status: "success",
      position: "bottom-right",
      duration: 9000,
      isClosable: true,
    });
    console.log("Payment successful! Reference:", reference);
  };

  const handlePaymentClose = () => {
    toast({
      title: "Payment was not completed.",
      description: "Wait! You need this oil, don't go!!!!",
      status: "warning",
      duration: 5000,
      position: "bottom-right",
      isClosable: true,
    });
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    metadata: {
      name,
      phone,
    } as Metadata,
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  };

  const [loading, setLoading] = useState(false);

  return (
    <Box width={"100%"}>
      <Button
        width={"100%"}
        py={8}
        bg={"#74422D"}
        as={PaystackButton}
        className="paystack-button"
        {...componentProps}
        onClick={() => {
          setLoading(!loading);
        }}
        color={"#fff"}
        leftIcon={<Wallet />}
        _hover={{ bg: "#74422D" }}
      >
        {loading ? <Spinner /> : "Pay Now"}
      </Button>
    </Box>
  );
};

export default PaymentAction;
