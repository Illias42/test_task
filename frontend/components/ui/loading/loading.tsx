"use client";

import { Flex, Progress, Image, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { LoadingProps } from "./loading.type";

const loaderVariants = {
  enter: () => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  show: {
    y: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      y: 10,
      opacity: 0,
    };
  },
};

const childrenVariants = {
  hide: () => {
    return {
      opacity: 0,
    };
  },
  show: {
    opacity: 1,
  },
};

const Loading: React.FC<LoadingProps> = ({ isLoading, children }) => {
  const [doneAnimation, setDoneAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        if (!doneAnimation) {
          setDoneAnimation(true);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
    setDoneAnimation(false);
  }, [isLoading, doneAnimation]);

  return (
    <Box>
      <AnimatePresence>
        {!doneAnimation && (
          <motion.div
            key="loading"
            variants={loaderVariants}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            initial="enter"
            animate="show"
            exit="exit"
            style={{
              position: "absolute",
              height: "100dvh",
              width: "100%",
              top: 0,
              left: 0,
              overflow: "hidden",
            }}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="100%"
              height="100%"
              gap={4}
              p={5}
            >
              <Flex direction="column" gap={2} align="center">
                <Image src="/coaster.svg" height="auto" width="150px" />
              </Flex>
              <Progress
                hasStripe
                borderRadius="6px"
                colorScheme="purple"
                isIndeterminate
                width="250px"
                size="sm"
              />
            </Flex>
          </motion.div>
        )}
        {doneAnimation && (
          <motion.div
            initial="hide"
            animate="show"
            variants={childrenVariants}
            transition={{ type: "tween", delay: 0.5 }}
            key="children"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
export default memo(Loading);
