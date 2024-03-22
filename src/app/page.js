import { Flex } from "@chakra-ui/react";
import CarouselMaterialesLayout from "./carouselMaterialesLayout/layout";
import ContactCard from "./contactCard/layout";
import ConversationZoom from "./conversationZoom/layout";
import HorizontalCardPrices from "./horinzontalCardPrices/layout";
import HorizontalCardIlustrations from "./horizontalCardIlustrations/layout";
import ReviewCardCarousel from "./reviewCardCarousel/layout";
import VideoContainer from "./videoContainer/layout";
import HeaderSC from "./headerSC/layout";

export default function Home() {
  return (
    <main>
      <Flex direction="column">
        <HeaderSC />
        <CarouselMaterialesLayout />
        <VideoContainer />
        <ReviewCardCarousel />
        <HorizontalCardIlustrations />
        <HorizontalCardPrices />
        <ConversationZoom />
        <ContactCard />
      </Flex>
    </main>
  );
}
