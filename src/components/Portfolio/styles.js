import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 100px;

  h2 {
    margin-bottom: 45px;
  }
`;

export const Cards = styled.div`
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
