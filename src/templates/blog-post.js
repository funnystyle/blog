import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark;
  const { prev, next, title, index } = pathContext;
  console.log(prev, next, title,)

  return (<div>
    <Helmet title={`${post.frontmatter.title} - funnystyle}`} />
      <h1>{post.frontmatter.title}</h1>
      <div>
        Tags :
        <ul style={{ display: 'inline-block', listStyle: 'none', margin: 0, padding: 0, verticalAlign: 'top' }}>
          {post.frontmatter.tags.map(tag => (
            <li
              key={tag}
              style={{
                margin: '0 3px',
                padding: 0,
                border: 0,
                float: 'left',
              }}
            >
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '30px' }} dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>
        {prev && (
          <Link to={prev.fields.slug}>
            Prev: {prev.frontmatter.title}
          </Link>
        )}
      </p>

      <p>
        {next && (
          <Link to={next.fields.slug}>
            Next: {next.frontmatter.title}
          </Link>
        )}
      </p>
    </div>
  )
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
