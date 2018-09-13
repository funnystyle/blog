import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>

      <div>Tags :
        <ul style={{ display: "inline-block", listStyle: "none", margin: 0, padding: 0, verticalAlign: "top" }}>
        {post.frontmatter.tags.map((tag) => (
            <li key={tag} style={{
              margin: "0 3px",
              padding: 0,
              border: 0,
              float: "left" }}>
              <Link to={`/tags/${tag}`}>{tag}</Link></li>
        ))}
        </ul>
      </div>
      <div style={{ marginTop: "30px" }} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
