import styled from "styled-components";
import Link from "../Link";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SocialLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
