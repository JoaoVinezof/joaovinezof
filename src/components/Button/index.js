import styled, { css } from "styled-components";

const defaultColors = css`
  background: #fff;
  color: #000;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const primary = css`
  background: var(--primary);
  color: #fff;

  &:hover {
    background: #fff;
    color: var(--primary);
  }
`;

const variants = {
  defaultColors,
  primary,
};

const validVariants = ["defaultColors", "primary"];

const Button = styled.button`
  display: inline-block;
  min-width: 150px;
  height: 46px;
  padding: 12px 18px;
  border: none;
  border-radius: var(--border);
  cursor: pointer;
  transition: background 0.3s;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  text-align: center;

  ${(props) =>
    validVariants.includes(props.variant)
      ? variants[props.variant]
      : variants["defaultColors"]}
`;

Button.defaultProps = {
  variant: "defaultColors",
};

export default Button;
