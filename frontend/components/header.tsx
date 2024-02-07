"use client";
import useColors from "@/lib/hooks/useColors";
import { ArrowBackIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colors = useColors();

  return (
    <Flex
      h="8dvh"
      bg={colors.head}
      className="items-center justify-between px-8"
    >
      <Button>
        <ArrowBackIcon />
      </Button>
      <Image src="./coaster.svg" height={40} width={40} alt="Logo" />
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
