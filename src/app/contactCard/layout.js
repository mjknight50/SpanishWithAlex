"use client";

import {
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Importa los iconos de redes sociales
import LayoutContainer from "../commons/layoutContainer/layout";

const ContactCard = () => {
  const { colors } = useTheme();

  return (
    <LayoutContainer>
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex direction={"column"} justifyContent={"center"}>
          <Flex
            p={{ base: 0, md: "3em" }}
            direction={"column"}
            alignItems={{ base: "center", md: "flex-start" }}
            borderWidth={{ base: "0", md: "1px 0 1px 1px" }}
            borderColor={useColorModeValue(
              colors.light.border,
              colors.dark.border
            )}
            bg={{
              base: "transparent",
              md: useColorModeValue(
                colors.light.bgSecondary,
                colors.dark.bgSecondary
              ),
            }}
            borderRadius={"2em 0 0 2em "}
          >
            <Text color="red" pb={{ base: "0.5em", md: "1em" }}>
              SOCIALS
            </Text>
            <Heading fontSize="3xl" pb="0.5em">
              Follow for more.
            </Heading>
            <Text pb={"2em"} textAlign={{ base: "center", md: "left" }}>
              If you enjoy my content, consider giving me a follow. You can
              support by liking, sharing, and engaging with my posts. Your
              encouragement means a lot! ❤
            </Text>
            <Flex display={{ base: "none", md: "block" }}>
              <Link
                href="https://www.youtube.com/channel/UCbx58EYkaC1yJBxNuOvhDOg"
                isExternal
              >
                <Icon
                  as={FaYoutube}
                  boxSize={10}
                  // color="blue.400"
                  border="2px solid red" // Agregar borde rojo al icono
                  p={2} // Añadir espaciado para el borde
                  borderRadius="full" // Mantener borde circular
                  mr={2}
                />
              </Link>
              <Link href="https://twitter.com/spanishwithalex" isExternal>
                <Icon
                  as={FaTwitter}
                  boxSize={10}
                  // color="blue.400"
                  border="2px solid red" // Agregar borde rojo al icono
                  p={2} // Añadir espaciado para el borde
                  borderRadius="full" // Mantener borde circular
                  mr={2}
                />
              </Link>
              <Link href="https://www.facebook.com/spanishwithalex" isExternal>
                <Icon
                  as={FaFacebook}
                  boxSize={10}
                  // color="blue.800"
                  border="2px solid red" // Agregar borde rojo al icono
                  p={2} // Añadir espaciado para el borde
                  borderRadius="full" // Mantener borde circular
                  mr={2}
                />
              </Link>
              <Link href="https://www.instagram.com/spanishwithalex" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={10}
                  // color="purple.500"
                  border="2px solid red" // Agregar borde rojo al icono
                  p={2} // Añadir espaciado para el borde
                  borderRadius="full" // Mantener borde circular
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src="/images/contact_img.png"
          alt="Contact Image"
          width={{ base: "inherit", lg: "50%" }}
        />
        <Flex
          justifyContent="center"
          pt="2em"
          display={{ base: "block", md: "none" }}
        >
          <Link
            href="https://www.youtube.com/channel/UCbx58EYkaC1yJBxNuOvhDOg"
            isExternal
          >
            <Icon
              as={FaYoutube}
              boxSize={10}
              // color="blue.400"
              border="2px solid red" // Agregar borde rojo al icono
              p={2} // Añadir espaciado para el borde
              borderRadius="full" // Mantener borde circular
              mr={2}
            />
          </Link>
          <Link href="https://twitter.com/spanishwithalex" isExternal>
            <Icon
              as={FaTwitter}
              boxSize={10}
              // color="blue.400"
              border="2px solid red" // Agregar borde rojo al icono
              p={2} // Añadir espaciado para el borde
              borderRadius="full" // Mantener borde circular
              mr={2}
            />
          </Link>
          <Link href="https://www.facebook.com/spanishwithalex" isExternal>
            <Icon
              as={FaFacebook}
              boxSize={10}
              // color="blue.800"
              border="2px solid red" // Agregar borde rojo al icono
              p={2} // Añadir espaciado para el borde
              borderRadius="full" // Mantener borde circular
              mr={2}
            />
          </Link>
          <Link href="https://www.instagram.com/spanishwithalex" isExternal>
            <Icon
              as={FaInstagram}
              boxSize={10}
              // color="purple.500"
              border="2px solid red" // Agregar borde rojo al icono
              p={2} // Añadir espaciado para el borde
              borderRadius="full" // Mantener borde circular
            />
          </Link>
        </Flex>
      </Flex>
    </LayoutContainer>
  );
};

export default ContactCard;
