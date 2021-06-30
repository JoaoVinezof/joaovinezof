import React from "react";
// import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Back from "../components/Back";
import Search from "../components/Search";

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <Container>
        <Back to="/">Voltar para a home</Back>
        <Search />
      </Container>
    </Layout>
  );
};

// export const query = graphql`
//   query allPosts {
//     allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogPage;
