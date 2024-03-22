"use client";

import {
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import LayoutContainer from "../commons/layoutContainer/layout";
import CustomButton from "../customButton/layout";
import HeadingSection from "../commons/headingSection/layout";

const HorizontalCardPrices = () => {
  const { colors } = useTheme();

  return (
    <LayoutContainer>
      <HeadingSection title="PRICING" sub="Limited time only" />

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        justifyContent="space-around"
        alignItems="center"
        bg={useColorModeValue(
          colors.light.bgSecondary,
          colors.dark.bgSecondary
        )}
        borderColor={useColorModeValue(colors.light.border, colors.dark.border)}
        p="8"
      >
        <Flex direction="column" alignItems={"center"}>
          <Text fontSize="8xl" color="orange">
            $20
          </Text>
          <Text fontWeight="bold" mt={2}>
            per month
          </Text>
        </Flex>
        <Flex my={{ base: "12", md: "0" }} direction="column">
          <VStack align="start" spacing={4}>
            <Text> 📌 Access to all Exclusive content</Text>
            <Divider
              borderColor={useColorModeValue(
                colors.light.border,
                colors.dark.border
              )}
              borderWidth="1px"
              height="auto"
            />
            <Text>📌 Access to all Discord channels</Text>
            <Divider
              borderColor={useColorModeValue(
                colors.light.border,
                colors.dark.border
              )}
              borderWidth="1px"
              height="auto"
            />
            <Text>📌 Access to the Telegram group</Text>
          </VStack>
        </Flex>
        <Flex direction="column">
          <CustomButton label="Subscribe" />
        </Flex>
      </Flex>
    </LayoutContainer>
  );
};

export default HorizontalCardPrices;
