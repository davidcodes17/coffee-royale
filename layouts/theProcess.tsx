import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const TheProcess = () => {
  return (
    <Box>
      <Heading textAlign={"center"} fontSize={50} mb={5}>
        The Process
      </Heading>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        mb={5}
        flexWrap={"wrap"}
      >
        <Box maxW="800px" mx="auto" p={5}>
          <Heading as="h2" size="lg" mb={3}>
            How to Self-Brew Coffee
          </Heading>

          <Heading as="h3" size="md" mb={2}>
            Materials Needed:
          </Heading>
          <UnorderedList spacing={2} mb={5}>
            <ListItem>Fresh coffee beans</ListItem>
            <ListItem>Coffee grinder</ListItem>
            <ListItem>
              Coffee maker (drip coffee maker, French press, pour-over, etc.)
            </ListItem>
            <ListItem>
              Filter (if using a drip coffee maker or pour-over)
            </ListItem>
            <ListItem>Kettle (if using a pour-over or French press)</ListItem>
            <ListItem>Water</ListItem>
            <ListItem>Coffee mug</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" mb={2}>
            Steps:
          </Heading>

          <Heading as="h4" size="sm" mb={1}>
            1. Choose Your Coffee Beans:
          </Heading>
          <Text mb={3}>
            Select high-quality, fresh coffee beans. The type of beans you
            choose (Arabica, Robusta, or a blend) will impact the flavor of your
            coffee.
          </Text>

          <Heading as="h4" size="sm" mb={1}>
            2. Measure the Coffee Beans:
          </Heading>
          <Text mb={3}>
            Measure the appropriate amount of coffee beans. A standard ratio is
            about 1 to 2 tablespoons of coffee beans per 6 ounces of water, but
            this can be adjusted based on your taste preference.
          </Text>

          <Heading as="h4" size="sm" mb={1}>
            3. Grind the Coffee Beans:
          </Heading>
          <Text mb={3}>
            Use a coffee grinder to grind the beans to the appropriate
            consistency. The grind size depends on your brewing method:
          </Text>
          <UnorderedList mb={3}>
            <ListItem>
              <strong>Coarse:</strong> For French press
            </ListItem>
            <ListItem>
              <strong>Medium-coarse:</strong> For Chemex
            </ListItem>
            <ListItem>
              <strong>Medium:</strong> For drip coffee makers
            </ListItem>
            <ListItem>
              <strong>Medium-fine:</strong> For pour-over (e.g., Hario V60)
            </ListItem>
            <ListItem>
              <strong>Fine:</strong> For espresso machines
            </ListItem>
          </UnorderedList>

          <Heading as="h4" size="sm" mb={1}>
            4. Heat the Water:
          </Heading>
          <Text mb={3}>
            Heat water to the optimal temperature, which is around 195°F to
            205°F (90°C to 96°C). If you don't have a thermometer, boil the
            water and let it sit for about 30 seconds before using.
          </Text>

          <Heading as="h4" size="sm" mb={1}>
            5. Prepare the Coffee Maker:
          </Heading>
          <Text mb={3}>
            If you're using a drip coffee maker or pour-over, place the filter
            in the coffee maker and add the ground coffee. If you're using a
            French press, add the ground coffee directly to the press.
          </Text>

          <Heading as="h4" size="sm" mb={1}>
            6. Brew the Coffee:
          </Heading>
          <Text mb={3}>
            Pour the hot water over the ground coffee. The brewing time will
            vary based on the method you're using:
          </Text>
          <UnorderedList mb={3}>
            <ListItem>
              <strong>Drip coffee maker:</strong> Follow the machine’s
              instructions.
            </ListItem>
            <ListItem>
              <strong>Pour-over:</strong> Pour the water slowly in a circular
              motion, usually taking about 3-4 minutes.
            </ListItem>
            <ListItem>
              <strong>French press:</strong> Let the coffee steep for about 4
              minutes before pressing the plunger down.
            </ListItem>
          </UnorderedList>

          <Heading as="h4" size="sm" mb={1}>
            7. Serve and Enjoy:
          </Heading>
          <Text>
            Pour the freshly brewed coffee into your mug and enjoy it black or
            with your preferred additions like milk, cream, or sugar.
          </Text>
        </Box>
        <Box>
          <Image
            mt={5}
            src="https://pontevecchiosrl.it/wp-content/uploads/2021/03/preinfusione-caffe-macchina.jpg"
            alt="Coffee Brewing Process"
            borderRadius={40}
            //   height={400}
            width={700}
          />
          <Image
            mt={5}
            src="https://th-thumbnailer.cdn-si-edu.com/4NEJXSP8oe1jcm6UnuxsgNqjmSs=/1000x750/filters:no_upscale():focal(960x640:961x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/1f/c7/1fc74f90-a9a9-4b3a-8e11-029c8af7b1f2/coffee-4334647_1920.jpg"
            alt="Coffee Brewing Process"
            borderRadius={40}
            //   height={400}
            width={700}
          />
          <Image
            mt={5}
            src="https://media.istockphoto.com/id/1148148346/video/barista-hand-making-latte-art-coffee.jpg?s=640x640&k=20&c=V5vbMtFF5ebxwYkVvOcz2dBXFHJWEy32GBCeFp_u-XA="
            alt="Coffee Brewing Process"
            borderRadius={40}
            //   height={400}
            width={700}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TheProcess;
