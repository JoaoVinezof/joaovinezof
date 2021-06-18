import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components"

const TitleAndSubtitle = () => {
  const { site } = useStaticQuery(graphql`
    query TitleAndSubtitle {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return(
    <Wrapper>
      <Title>{site.siteMetadata.title}</Title>
      <Subtitle>
        <Line />
        {site.siteMetadata.subtitle}
      </Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  line-height: 56px;
  color: var(--title);
  margin: 0;
  margin-top: -28px;

  @media (min-width: ${props => props.theme.breakpoints.desktop.min}) {
    margin-top: 66px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: var(--text)
`;

const Line = styled.div`
  flex: 1;
  display: block;
  max-width: 50px;
  height: 2px;
  background-color: var(--primary);
  margin-right: 8px;
`;

export default TitleAndSubtitle
