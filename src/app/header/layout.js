"use client";

import {
  Divider,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import LayoutContainer from "../commons/layoutContainer/layout";

const Header = ({ materiales }) => {
  const { colors } = useTheme();
  const [width, setWidth] = useState(0);
  const { colorMode } = useColorMode(); // Correctly using useColorMode hook

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImageUrl =
    colorMode === "light"
      ? "/images/banner_img2Gris.png"
      : "/images/banner_img2.png";

  // console.log(materiales);

  return (
    <LayoutContainer mt={16}>
      <Flex justifyContent={"center"}>
        {width >= 768 ? (
          <Image src={bannerImageUrl} alt="Alex" width={800} height={200} />
        ) : (
          <Image
            src="/images/banner_img3.png"
            alt="Alex"
            width={350}
            height={150}
          />
        )}
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        p={8}
        justifyContent={"space-around"}
        alignItems={"center"}
        borderColor={useColorModeValue(colors.light.border, colors.dark.border)}
        borderWidth="1px"
        borderRadius={18}
        boxShadow="2xl"
        bg={useColorModeValue(
          colors.light.bgSecondary,
          colors.dark.bgSecondary
        )}
        zIndex={1}
        position="relative"
        top="-20px"
      >
        <Flex
          width={{ base: "100%", md: "60%" }}
          justifyContent={"space-around"}
          gap={{ base: 6 }}
        >
          <Flex direction={"column"}>
            <Text fontSize={{ base: "1xl", md: "1xl" }}>Live</Text>
            <Text fontSize={{ base: "5xl", md: "6xl" }}>10</Text>
          </Flex>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "1xl", md: "1xl" }}>Lessons</Text>
            <Text fontSize={{ base: "5xl", md: "6xl" }}>7.4k</Text>
          </Flex>
          <Flex direction={"column"}>
            <Text fontSize={{ base: "1xl", md: "1xl" }}>Materials</Text>
            <Text fontSize={{ base: "5xl", md: "6xl" }}>
              {materiales.length}
            </Text>
          </Flex>
        </Flex>
        <Divider
          display={{ base: "block", md: "none" }}
          borderColor={useColorModeValue(
            colors.light.border,
            colors.dark.border
          )}
          borderWidth="1px"
          height="auto"
          mt={2}
          mb={3}
        />
        <Flex
          direction={"column"}
          gap={{ base: 2, md: 5 }}
          alignSelf={{ md: "start" }}
        >
          <Text fontSize="1xl"> ⭐⭐⭐⭐⭐ 5/5 </Text>
          <Text fontSize="1xl">
            Students give Alex an <br /> average rating of 5 stars.
          </Text>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
};

export default Header;
