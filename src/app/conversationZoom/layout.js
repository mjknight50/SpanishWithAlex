"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LayoutContainer from "../commons/layoutContainer/layout";
import CustomButton from "../customButton/layout";

const showAlert = () => {
  alert("¡Hiciste clic en el botón!");
};

const ConversationZoom = () => {
  return (
    <LayoutContainer>
      <Flex direction={{ base: "column", md: "row-reverse" }}>
        <Text color="red" mb={2} display={{ base: "block", md: "none" }}>
          START TALKING TODAY
        </Text>
        <Flex justifyContent={"center"}>
          <Image
            src="images\calander_img1.png"
            alt="Alex talking with student"
          />
        </Flex>
        <Flex direction={"column"}>
          <Text
            color="red"
            mb={2}
            display={{ base: "none", md: "block" }}
            justifyContent={"center"}
          >
            START TALKING TODAY
          </Text>
          <Heading fontSize="2xl" mb={4}>
            Book a lesson now!
          </Heading>
          <Text mb={4}>
            I have been teaching for more than ten years now, adults and
            children, all levels, exams preparations and conversational spanish.
            If you want my help just book a lesson and lets start today!
          </Text>
          <Box mt={6}>
            <CustomButton label="Book a lesson" onClick={showAlert} />
          </Box>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
};

export default ConversationZoom;
