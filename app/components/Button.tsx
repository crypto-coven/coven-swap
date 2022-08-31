import { forwardRef } from "react";
import styled from "styled-components";
import { Values } from "../../lib/type";
import { variant } from "styled-system";

const VARIANTS = {
  filled_dark: "filled_dark",
  filled_light: "filled_light",
  outline_dark: "outline_dark",
  outline_light: "outline_light",
  inactive: "inactive",
};

const SIZES = {
  small: "small",
  large: "large",
};

type ButtonVariant = Values<typeof VARIANTS>;

type ButtonSize = Values<typeof SIZES>;

type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & Omit<JSX.IntrinsicElements["a"], "ref">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, size = SIZES.small, href, ...buttonProps }, ref) {
    return (
      <StyledButton {...buttonProps} $size={size} href={href} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

type StyledButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  href?: string;
  $size: ButtonSize;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<{}> | undefined;
};

const isButton = (props: StyledButtonProps) => !(props.as ?? props.href);

const StyledButton = styled("div").attrs<StyledButtonProps>((props) => ({
  as: isButton(props) ? "button" : "a",
  type: isButton(props) ? props.type ?? "button" : undefined,
}))<StyledButtonProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 10;
  :hover:not([disabled]) {
    transition: 0.2s;
    box-shadow: black;
  }
  :disabled {
    opacity: 0.2;
  }

  ${(props) =>
    variant({
      prop: "$size",
      variants: {
        [SIZES.large]: {
          fontSize: "26px",
          fontWeight: 600,
          padding: "12px 130px",
          borderRadius: "12px",
        },
        [SIZES.small]: {
          fontSize: "20px",
          fontWeight: 500,
          padding: "6px 25px",
          borderRadius: "50px",
        },
      },
    })}

  ${(props) =>
    variant({
      prop: "variant",
      variants: {
        [VARIANTS.filled_dark]: {
          border: "1px solid black",
          backgroundColor: "#000000",
          color: "white",
        },
        [VARIANTS.filled_light]: {
          border: "1px solid white",
          backgroundColor: "white",
          color: "black",
        },
        [VARIANTS.outline_dark]: {
          border: "1px solid white",
          color: "white",
        },
        [VARIANTS.outline_light]: {
          border: "1px solid white",
          color: "black",
        },
        [VARIANTS.inactive]: {
          backgroundColor: "#c4c4c4",
          color: "white",
        },
      },
    })}
`;

Button.defaultProps = {
  variant: "primary",
};
