const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileName = createFilePath({
      node,
      getNode,
      basePath: "data/posts/",
    });

    createNodeField({
      node,
      name: "slug",
      value: `/blog/${fileName.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              templateKey
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${node.frontmatter.templateKey}.js`
        ),
        context: {
          slug: node.fields.slug,
          category: node.frontmatter.category,
        },
      });
    });
  });
};
