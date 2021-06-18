import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import LastPostItem from "../components/LastPostsItem";
import Back from "../components/Back";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title="Blog" />
      <Container>
        <Back to="/">Voltar para a home</Back>
        {posts.map(
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
    </Layout>
  );
};

export const query = graphql`
  query allPosts {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
`;

export default BlogPage;
