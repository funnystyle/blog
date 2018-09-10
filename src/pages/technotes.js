import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      {/* <h1 style={{ display: "inline-block", borderBottom: "1px solid" }}>
        Amazing Pandas Eating Things
      </h1> */}
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3 style={{ marginBottom: "2px" }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query TechnotesQuery {
  allMarkdownRemark(filter: { frontmatter:  { category: { eq:"technotes"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
