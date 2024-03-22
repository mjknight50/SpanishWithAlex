const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
  colors: {
    light: {
      bgPrimary: "#fefffe",
      bgTranspLight: `rgba(254, 255, 254, 0.8)`,
      bgSecondary: "#f3f3f3",
      border: "#b6b6b6",
    },
    dark: {
      bgPrimary: "#020919",
      bgTranspDark: `rgba(2, 9, 25, 0.8)`,
      bgSecondary: "#0d1321",
      border: "#30353f",
    },
  },
  fonts: {},
});

export default theme;
