import gql from "graphql-tag";

export const BlogPageQuery = gql`
  query allHomePages {
    allBlogs {
      edges {
        node {
          title
        }
      }
    }
  }
`;
