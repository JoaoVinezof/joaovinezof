import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Wrapper } from "./styles";
import Container from "../Container";
import Title from "../Title";
import LastPostItem from "../LastPostsItem";

const LastPosts = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query LastPosts {
      allMarkdownRemark(
        limit: 5
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Container>
        <Title level={2}>Ultimas postagens</Title>
        {edges.map(
          (
            {
              node: {
                frontmatter: { title, description },
                fields: { slug },
              },
            },
            index
          ) => (
            <LastPostItem
              key={index}
              title={title}
              description={description}
              slug={slug}
            />
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default LastPosts;
