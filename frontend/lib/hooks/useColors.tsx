'use client'

import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
    const colors = {
        bg: useColorModeValue("gray.200", "gray.700"),
        bgSecondary: useColorModeValue("white", "whiteAlpha.50"),
        primary: useColorModeValue("orange.200", "orange.300"),
        head: useColorModeValue("purple.500", "gray.600"),
    }
    
    return colors;
}

export default useColors;