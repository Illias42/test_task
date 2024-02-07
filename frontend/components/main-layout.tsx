"use client";
import { Box, Flex } from "@chakra-ui/react";
import { PropsWithChildren, FC } from "react";
import Header from "./header";
import { Loading } from "./ui/loading";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Loading>
      <Box height="100%">
        <Header />
        <Flex
          maxH="92dvh"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              borderRadius: 0,
              backgroundColor: `rgba(0, 0, 0, 0)`,
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "16px",
              backgroundColor: `rgba(0, 0, 0, 0.2)`,
            },
          }}
        >
          {children}
        </Flex>
      </Box>
    </Loading>
  );
};

export default MainLayout;
