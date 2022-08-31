import styled, { css } from "styled-components";
import { variant } from "styled-system";

type TextSize = "xsmall" | "small" | "medium" | "large";

const headingSizes = css`
  --text-large: 30px;
  --text-small: 26px;
`;
const bodySizes = css`
  --text-large: 24px;
  --text-medium: 20px;
  --text-small: 16px;
  --text-xsmall: 12px;
`;
const textSizeVariant = variant({
  prop: "size",
  variants: {
    large: {
      fontSize: "var(--text-large)",
    },
    medium: {
      fontSize: "var(--text-medium)",
    },
    small: {
      fontSize: "var(--text-small)",
    },
    xsmall: {
      fontSize: "var(--text-xsmall)",
    },
  },
});
const Body = styled.div.attrs<TextSize>({})`
  font-family: "Inconsolata";
  ${bodySizes};
  ${textSizeVariant};
`;
const Heading = styled.div.attrs<TextSize>({})`
  font-family: "Germania One" ${headingSizes};
  ${textSizeVariant};
`;
export const Text = Object.assign(Body, {
  Body,
  Heading,
});