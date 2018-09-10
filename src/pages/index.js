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
        // <div key={node.id}>
        //   <Link
        //     to={node.fields.slug}
        //     style={{ textDecoration: `none`, color: `inherit` }}
        //   >
        //     <h3 style={{ marginBottom: "2px" }}>
        //       {node.frontmatter.title}{" "}
        //       <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
        //     </h3>
        //     <p>{node.excerpt}</p>
        //   </Link>
        // </div>

        <div key={node.id} style={{ height: "90px", position: "relative", padding: "10px 0" }}>
          <div style={{ float: "left", overflow: "hidden", height: "100%", paddingRight: "10px" }}>
            {(() => {
              if (node.frontmatter.cover) {
                console.log('###################', node.frontmatter.cover.childImageSharp.resolutions.src)
                return <img src={node.frontmatter.cover.childImageSharp.resolutions.src} style={{ height: "100%", border: "1px solid #eee" }} />
              }
            })()}
          </div>
          <p style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: `inherit` }}
            >

              <h3 style={{ marginBottom: "2px" }}>
                {node.frontmatter.title} ({node.frontmatter.press}){" "}
              </h3>
              <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter:  { category: { eq:"bookreview"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            cover {
              childImageSharp {
                resolutions(width: 400) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            tags
            press
            translator
            author
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
