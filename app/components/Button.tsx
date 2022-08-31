import { forwardRef } from "react";
import styled from "styled-components";
import { variant } from "styled-system";

type ButtonVariant =
  | "filled_dark"
  | "filled_light"
  | "outline_dark"
  | "outline_light"
  | "inactive";

type ButtonSize = "small" | "large";

type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & Omit<JSX.IntrinsicElements["a"], "ref">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant = "filled_dark", size = "small", href, ...buttonProps },
    ref
  ) {
    return (
      <StyledButton
        {...buttonProps}
        $size={size}
        $variant={variant}
        href={href}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);

type StyledButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  href?: string;
  $size: ButtonSize;
  $variant: ButtonVariant;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<{}> | undefined;
};

const isButton = (props: StyledButtonProps) => !(props.as ?? props.href);

const StyledButton = styled("button").attrs<StyledButtonProps>((props) => ({
  as: isButton(props) ? "button" : "a",
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
        ["large"]: {
          fontSize: "26px",
          fontWeight: 600,
          padding: "12px 130px",
          borderRadius: "12px",
        },
        ["small"]: {
          fontSize: "20px",
          fontWeight: 500,
          padding: "6px 25px",
          borderRadius: "50px",
        },
      },
    })}

  ${(props) =>
    variant({
      prop: "$variant",
      variants: {
        ["filled_dark"]: {
          border: "1px solid black",
          backgroundColor: "#000000",
          color: "white",
        },
        ["filled_light"]: {
          border: "1px solid white",
          backgroundColor: "white",
          color: "black",
        },
        ["outline_dark"]: {
          background: "none",
          border: "1px solid white",
          color: "white",
        },
        ["outline_light"]: {
          background: "none",
          border: "1px solid white",
          color: "black",
        },
        ["inactive"]: {
          backgroundColor: "#c4c4c4",
          color: "white",
        },
      },
    })}
`;
