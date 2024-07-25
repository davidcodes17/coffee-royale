import Testimony from "@/components/testimony";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Testimonies = () => {
  const testimonies = [
    {
      company: "Starbucks",
      des: "Cafe Royale never fails to deliver a great cup of coffee. The ambiance of their cafes is perfect for both working and relaxing. Their attention to detail and customer service always make for a pleasant experience.",
      name: "Sarah Johnson",
    },
    {
      company: "Blue Bottle Coffee",
      des: "Cafe Royale offers some of the best-tasting coffee I've ever had. Their commitment to quality and freshness is evident in every cup. I appreciate their minimalist approach and dedication to sustainability.",
      name: "Michael Lee",
    },
    {
      company: "Peet's Coffee",
      des: "Cafe Royale has been my go-to for years. Their dark roast is rich and full of flavor, and their baristas are always friendly and knowledgeable. It's a great place to start my day.",
      name: "Emily Davis",
    },
    {
      company: "Dunkin'",
      des: "Cafe Royale provides great value for money. Their coffee is consistently good, and I love their seasonal flavors. It's a convenient and reliable choice for my daily caffeine fix.",
      name: "John Smith",
    },
    {
      company: "Intelligentsia Coffee",
      des: "Cafe Royale is a game-changer. Their single-origin coffees are exceptional, and their commitment to sourcing directly from farmers is commendable. Every cup is an experience.",
      name: "Rachel Martinez",
    },
  ];

  return (
    <Box id="customer" px={{ lg: 100, md: 50, sm: 5, base: 5 }} pb={100}>
      <Heading
        fontSize={{ lg: 60, md: 40, sm: 40, base: 40 }}
        pb={10}
        textAlign={"center"}
      >
        Testimonies
      </Heading>
      <Flex borderRadius={40} overflowX={"scroll"} gap={10} width={"100%"}>
        {testimonies.map((test, key) => (
          <Testimony
            company={test.company}
            des={test.des}
            name={test.name}
            key={key}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonies;
