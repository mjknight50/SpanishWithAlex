"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeadingSection from "../commons/headingSection/layout";
import LayoutContainer from "../commons/layoutContainer/layout";
import CustomButton from "../customButton/layout";

const VideoContainer = () => {
  return (
    <LayoutContainer>
      <Flex direction={{ base: "column", md: "row" }}>
        <Text
          color="red"
          pb="4"
          display={{ base: "block", md: "none", lg: "none" }}
        >
          HOLA AMIGOS
        </Text>
        <Image
          src="\images\calander_img 2.png"
          alt="Imagen de Alex"
          width={{ base: "inherit", lg: "50%" }}
        />
        <Flex
          direction={"column"}
          pl={{ base: 2, md: 20 }}
          pr={{ base: 2, md: 0 }}
          pt={{ base: 8, md: 0 }}
          textAlign={"left"}
        >
          <HeadingSection title="HOLA AMIGOS" sub="Your personal Academy" />

          <Text mb={6}>
            Hi! Welcome to
            <strong style={{ fontWeight: "bold" }}> Spanish with Alex </strong>
            😊. I have created this new online adventure to
            <strong style={{ fontWeight: "bold" }}>help</strong> students from
            all countries who want to learn{" "}
            <strong style={{ fontWeight: "bold" }}>Spanish</strong>. Here your
            opinion it is very important . You can learn more in the link. I
            have put a ton of work into it, and I&rsquo;m very excited to share
            it with you. I know that you are going to learn a lot. Thank you for
            being here!
            <span style={{ fontStyle: "italic" }}> de corazón</span> ❤.{" "}
            <strong style={{ fontWeight: "bold" }}>Alex</strong>
          </Text>
          <Box textAlign={{ base: "center" }}>
            <CustomButton label="Learn More" />
          </Box>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
};

export default VideoContainer;
