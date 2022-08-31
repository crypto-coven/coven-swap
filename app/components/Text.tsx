import styled, { css } from "styled-components";
import { variant, color, ColorProps } from "styled-system";

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

const TextContainer = styled.div<ColorProps>`
  ${color}
`;

const Body = styled(TextContainer).attrs<{ size: TextSize }>({})`
  font-family: "Inconsolata";
  color: ${(props) => props.color ?? props.theme.text.white};
  ${bodySizes};
  ${textSizeVariant};
`;

const Heading = styled(TextContainer).attrs<{ size: TextSize }>({})`
  font-family: "Germania One";
  color: ${(props) => props.color ?? props.theme.text.peach};
  ${headingSizes};
  ${textSizeVariant};
`;

export const Text = Object.assign(Body, {
  Body,
  Heading,
});
