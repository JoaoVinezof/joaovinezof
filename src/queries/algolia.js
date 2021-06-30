const algolia = {
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const PostsQuery = `
{
  posts: allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
          date
          date_timestamp: date
          category
          tags
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}
`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: algolia.indexName,
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
];

module.exports = queries;
