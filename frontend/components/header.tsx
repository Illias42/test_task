"use client";
import { ROUTES } from "@/lib/constants/routes";
import useColors from "@/lib/hooks/useColors";
import { ArrowBackIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import {
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const colors = useColors();

  const toAuth = () => {
    router.push(ROUTES.LOGIN)
  }

  return (
    <Flex
      h="8dvh"
      bg={colors.head}
      className="items-center justify-between px-8"
    >
      <Button onClick={toAuth}>
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
