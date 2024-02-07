import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
        bg: mode("gray.200", "gray.900")(props),
      },
    }),
  },
});

export default theme;
