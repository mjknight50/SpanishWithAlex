"use client";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import LayoutContainer from "../commons/layoutContainer/layout";
import CustomButton from "../customButton/layout";
import HeadingSection from "../commons/headingSection/layout";

const HorizontalCardIlustrations = () => {
  return (
    <LayoutContainer>
      <Flex
        mb="8"
        direction={"column"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <HeadingSection
          title="COMMUNICATION CHANNELS"
          sub="An Academy with modern communication!"
        />
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Flex
          width={{ base: "100%", md: "30%" }}
          mb={12}
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={4}
        >
          <Image src={"/images/Illustration_1.svg"} alt="" width={224} />
          <Heading fontSize="2xl">Our Web</Heading>
          <Text>
            Exclusive content, curated courses, and personalized progress
            tracking converge to provide you with the best educational
            experience. Welcome to a dedicated and safe environment where you
            can converse in Spanish with qualified teachers.
          </Text>
        </Flex>
        <Flex
          width={{ base: "100%", md: "30%" }}
          mb={12}
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={4}
        >
          <Image src={"/images/Illustration_2.svg"} alt="" width={224} />
          <Heading fontSize="2xl">Discord</Heading>
          <Text>
            Unleash the power of channels with students like you. Whether it is
            group study sessions, live debates, or interactive lectures, the
            Channels in Discord provide a world of content and connects you with
            a vibrant community of spanish learners.
          </Text>
        </Flex>
        <Flex
          width={{ base: "100%", md: "30%" }}
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          gap={4}
        >
          <Image src={"/images/Illustration_3.svg"} alt="" width={224} />
          <Heading fontSize="2xl">Telegram</Heading>
          <Text>
            Stay connected on the go, receive important updates, and engage in
            quick discussions with the user-friendly interface. Whether you are
            at home or exploring the world, Telegram ensures you get the latest
            beat on your phone.
          </Text>
        </Flex>
      </Flex>
      <Flex
        pt={{ base: "8", md: "0" }}
        direction={"column"}
        alignItems={"center"}
      >
        <CustomButton label="Get Started" />
      </Flex>
    </LayoutContainer>
  );
};

export default HorizontalCardIlustrations;
