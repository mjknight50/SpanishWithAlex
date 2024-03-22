import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
const HeadingSection = ({ title, sub }) => {
  return (
    <Flex
      pb="8"
      direction={"column"}
      alignItems={"center"}
      textAlign={"center"}
    >
      
      <Text mb="4" color="red">
       {title}
      </Text>
      <Heading fontSize="3xl">{sub}</Heading>
    </Flex>
  );
};
export default HeadingSection;
