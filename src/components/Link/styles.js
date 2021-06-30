import styled, { css } from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const baseStyle = css`
  position: relative;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  color: var(--link);
  padding: 2px;

  &:visited {
    color: var(--link);
  }

  &:hover {
    color: #fff;

    &:before {
      height: 100%;
    }
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    background-color: var(--link);
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: var(--border);
    z-index: -1;
    transition: height 0.3s;
  }
`;

export const A = styled.a`
  ${baseStyle};
`;

export const Link = styled(AniLink)`
  ${baseStyle};
`;
