import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const TEXT_COLORS = {
  white: "#FFFFFF",
  peach: "#FCBC98",
  pale: "#C0CBEB",
  sand: "#CBAE99",
  gray: "#818181",
  lavendar: "#A2A0EC",
  lightGray: "#C9CACF",
};

const theme: DefaultTheme = {
  text: {
    ...TEXT_COLORS,
  }
}
type ThemeProps = {
  children: React.ReactNode
}
const Theme = ({children}: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme
