"use client";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";

export default function Navbar({ materiales }) {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { colors } = useTheme();
  const uniqueTypes = new Set();
  const newArray = materiales
    .filter((item) => {
      if (!uniqueTypes.has(item.tipo)) {
        uniqueTypes.add(item.tipo);
        return true;
      }
      return false;
    })
    .map((item) => ({
      label: item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1),
      subLabel: item.tipo,
      href: `/materiales/${item.tipo.toLowerCase()}`,
    }));

  const navItems = [
    {
      label: "Materiales",
      href: "/materiales",
      children: newArray,
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Shop",
      href: "/shop",
    },
  ];

  return (
    <Box position="fixed" width="100%" zIndex={3}>
      <Flex
        bg={useColorModeValue("white", colors.dark.bgSecondary)}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Image
              src={"/images/BanderitaEspañaTampon.png"}
              alt="logo"
              width={"78px"}
              height="auto"
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={navItems} colors={colors} />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={1}
        >
          <Menu>
            <Button onClick={toggleColorMode} bg={"transparent"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar size={"sm"} ml={2} src={""} />
            </MenuButton>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} colors={colors} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ navItems, colors }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("red", "red");
  const popoverContentBgColor = useColorModeValue(
    "white",
    colors.dark.bgSecondary
  );

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Link href={navItem.href}>{navItem.label}</Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"auto"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Link href={href}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "red" }}
              fontWeight={500}
            >
              {label}
            </Text>
            {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"red"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  );
};

const MobileNav = ({ navItems, colors }) => {
  return (
    <Stack
      bg={useColorModeValue("white", colors.dark.bgSecondary)}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Box
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          color: "red", // Add red color for hover effect on mobile
        }}
        _focus={{
          outline: "none", // Remove focus outline on mobile
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          <Link href={href}>{label}</Link>
        </Text>
        {children && (
          <Icon
            onClick={children && onToggle}
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box key={child.label} py={2}>
                <Link href={child.href}>{child.label}</Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
