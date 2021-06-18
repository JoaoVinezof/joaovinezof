import styled from "styled-components";
import { default as DefaultLink } from "../Link";

export const Wrapper = styled.li`
  ::before {
    content: '',
    display: block;
    with: 4px;
    height: 4px;
    border-radius: 50%;
    color: var(--link);
  }
`;

export const Link = styled(DefaultLink)`
  display: inline-block;
  z-index: 1;

  :hover {
    ::before {
    }

    ::after {
      height: 100%;
      border-radius: var(--border);
      z-index: -1;
    }
  }

  ::before {
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: calc(100% + 30px);
    height: 3px;
    background: var(--primary);
    transition: height 0.3s;
  }
`;
