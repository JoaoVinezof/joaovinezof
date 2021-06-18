import styled from "styled-components";
import Paragraph from "../Paragraph";

export const Wrapper = styled(Paragraph)`
  font-size: 18px;
  margin-bottom: 46px;
  text-transform: capitalize;

  span {
    text-transform: lowercase;
  }
`;
