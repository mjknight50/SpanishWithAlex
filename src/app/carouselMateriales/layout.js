"use client";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LayoutContainer from "../commons/layoutContainer/layout";
import "./materialCarousel.css";
import Link from "next/link";

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};

const CardMaterial = ({ material }) => {
  const { colors } = useTheme();

  return (
    <Container my="12" maxW={{ base: "container.sm", md: "6xl" }}>
      <Box
        maxW="100%"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        borderWidth="1px"
        borderColor={useColorModeValue(colors.light.border, colors.dark.border)}
      >
        <Image
          src={material.urlImagen}
          alt=""
          borderRadius="0.5rem 0.5rem 0 0"
        />
        <Box borderRadius="lg">
          <Text py={4}>{material.titulo}</Text>
        </Box>
      </Box>
    </Container>
  );
};

const CarouselMateriales = ({ materiales }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const elementsToShow = isSmallScreen ? 1 : 3;

  return (
    <LayoutContainer>
      <Flex direction={"column"} alignItems={"center"} textAlign={"center"}>
        <Text pb="4" color="red">
          THE LATESTS CONTENTS
        </Text>
        <Heading fontSize="3xl">Enjoy juice and fresh materials!</Heading>
      </Flex>
      <Carousel
        infiniteLoop
        showStatus={false}
        showArrows={!isSmallScreen}
        showThumbs={false}
        centerMode={!isSmallScreen}
        centerSlidePercentage={100 / elementsToShow}
        emulateTouch={!isSmallScreen}
        swipeScrollTolerance={!isSmallScreen ? 2 : 10}
        showSides={!isSmallScreen}
        selectedItem={0}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                left: 24,
                top: 156,
                borderColor: "#020919",
                borderWidth: "1px",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="arrow"
            >
              <ArrowBackIcon color="#020919" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                right: 24,
                top: 156,
                borderColor: "#020919",
                borderWidth: "1px",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="arrow"
            >
              <ArrowForwardIcon color="#020919" />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const icon = isSelected ? "●" : "○";
          return (
            <span
              style={{
                marginLeft: 20,
                color: "white",
                cursor: "pointer",
                color: "red",
              }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {icon}
            </span>
          );
        }}
      >
        {materiales.map((material) => {
          return (
            <Link
              href={`/materiales/${material.tipo}/${material.urlTitulo}`}
              key={material._id}
            >
              <CardMaterial material={material} />
            </Link>
          );
        })}
      </Carousel>
    </LayoutContainer>
  );
};

export default CarouselMateriales;
