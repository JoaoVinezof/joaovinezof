import styled from "styled-components";
import Paragraph from "../Paragraph";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 207px);
`;

export const Footer = styled.footer`
  margin-top: 100px;
  text-align: center;
`;

export const Cta = styled.div`
  margin-bottom: 24px;
`;

export const Copy = styled(Paragraph)`
  color: var(--primary);
  margin-bottom: 16px;

  strong {
    font-weight: 700;
  }
`;
