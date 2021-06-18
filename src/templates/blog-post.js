import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Back from "../components/Back";
import Title from "../components/Title";
import Margin from "../components/Margin";
import PostDate from "../components/PostDate";
import PostBody from "../components/PostBody";
import RelatedPosts from "../components/RelatedPosts";

const BlogPost = ({ data }) => {
  const post = data.post;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <Container>
        <Back to="/blog">Voltar para o blog</Back>
        <Margin marginBottom="18px">
          <Title level={1}>{post.frontmatter.title}</Title>
        </Margin>
        <PostDate
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
          country="Brasil"
        />
        <PostBody
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        {data.relatedPosts.edges.length > 0 && (
          <RelatedPosts relatedPosts={data.relatedPosts.edges} />
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($category: String!, $slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY", locale: "pt-br")
      }
      html
      timeToRead
    }
    relatedPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { category: { eq: $category } }
        fields: { slug: { ne: $slug } }
      }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPost;
