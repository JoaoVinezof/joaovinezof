import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components"

const Bio = () => {
  const { site } = useStaticQuery(graphql`
    query Bio {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return(
    <Wrapper>{site.siteMetadata.description}</Wrapper>
  )
}

const Wrapper = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: var(--text);
  margin: 0;
  margin-top: 38px;
  text-align: left;

  @media (min-width: ${props => props.theme.breakpoints.desktop.min}) {
    max-width: 400px;
    text-align: justify;
  }
`

export default Bio
