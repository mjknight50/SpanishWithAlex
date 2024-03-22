"use client";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

const LayoutContainer = ({ mt, pt, bg, children }) => {
  const { colors } = useTheme();

  return (
    <Box
      pt={pt}
      bg={useColorModeValue(
        bg === "secondary" ? colors.light.bgSecondary : colors.light.bgPrimary,
        bg === "secondary" ? colors.dark.bgSecondary : colors.dark.bgPrimary
      )}
    >
      <Container
        py={8}
        mt={mt}
        textAlign={"center"}
        maxW={{ base: "container.sm", md: "6xl" }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default LayoutContainer;
