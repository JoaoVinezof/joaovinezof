import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet.min}) {
    max-width: 1100px;
    padding-left: 165px;
    padding-right: 165px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop.min}) {
    padding: 0;
  }
`;

export { Container };

export default Container;
