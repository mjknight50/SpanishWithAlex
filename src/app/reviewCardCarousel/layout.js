"use client";

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
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getReviews } from "../lib/api";
import ReviewCard from "../reviewCard/layout";
import HeadingSection from "../commons/headingSection/layout";

function ReviewCardCarousel() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { colors } = useTheme();
  const [isSmallScreen] = useMediaQuery("(max-width: 1200px)");

  // Calculate the number of elements to show based on screen size
  const elementsToShow = isSmallScreen ? 1 : 3;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Box
      bg={useColorModeValue(colors.light.bgPrimary, colors.dark.bgPrimary)}
      position="relative"
    >
      {/* Background Image Layer */}
      <Image
        src="/images/reviewd_shape.svg"
        alt="Shape bubble"
        zIndex={1}
        position="absolute"
        top={0}
        width="100%"
        height="100%"
        right={{ base: "0", md: "400px" }}
      />

      {/* Content Layer */}
      <Container my="4" maxW={{ base: "container.sm", md: "6xl" }}>
        <Box position="relative" zIndex={1}>
        <HeadingSection
        title="REVIEWS"
        sub="What students have to say"/>
          <Carousel
            infiniteLoop
            showStatus={false}
            showArrows={!isSmallScreen}
            showThumbs={false}
            centerMode={!isSmallScreen}
            emulateTouch={!isSmallScreen}
            swipeScrollTolerance={!isSmallScreen ? 2 : 10}
            centerSlidePercentage={100 / elementsToShow}
            showSides={!isSmallScreen}
            selectedItem={0}
            interval={5000}
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
            {reviews &&
              reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

export default ReviewCardCarousel;
