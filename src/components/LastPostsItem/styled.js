import styled from "styled-components";

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h3`
  a {
    display: inline-block;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: var(--title);
    margin-bottom: 2px;

    &:hover {
      color: #fff;
    }

    &:before {
      background: var(--title);
    }
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: var(--text);
  margin: 0;
`;
