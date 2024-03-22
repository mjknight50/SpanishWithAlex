"use client";

import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Container,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { colors } = useTheme();

  return (
    <Container my="16" maxW={{ base: "container.sm", md: "6xl" }}>
      <Box
        mx={{ base: "0", md: "15" }}
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="red.500"
        overflow="hidden"
        boxShadow="lg"
        bg={useColorModeValue(
          colors.light.bgTranspLight,
          colors.dark.bgTranspDark
        )}
      >
        {/* Stars Section */}
        <Flex
          p="4"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid red.500"
        >
          <Text fontSize="xl" fontWeight="bold" noOfLines={4}>
            &quot;{review.text}&quot;
          </Text>
        </Flex>

        {/* Reviews Section */}
        <Flex p="4" alignItems="center">
          <Avatar
            size="lg"
            src={review.profilePicture}
            alt="Foto de perfil"
            mr={4}
            border="2px solid red"
          />
          <Box>
            <Text mt={2} color="gray.500">
              - {review.author}
            </Text>
            <Text fontSize="1xl"> ⭐⭐⭐⭐⭐ </Text>
          </Box>
          <Icon mx="6" as={FaQuoteRight} color="red.500" boxSize={10} />
        </Flex>
      </Box>
    </Container>
  );
};

export default ReviewCard;
