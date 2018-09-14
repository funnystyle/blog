---
title: next prev links in posts
category: technotes
tags:
    - gatsby
    - next prev links
date: 2018-09-14T13:24:00.000Z
---

1. 참고자료

    > https://egghead.io/lessons/gatsby-include-links-to-next-and-previous-gatsby-blog-posts  



2. gatsby-node.js 수정

    * graphql 쿼리 추가 : prev, next 링크에 쓸 title 을 추가
    
    ```jsx{6}
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
    ```

    * context 추가 : index 를 이용하여 prev, next 를 context 에 전달한다.
    
    ```jsx{1,7-8}
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
    ```

3. blog-post.js 수정

    * 인자 준비    
    
    ```jsx{1,3}
    export default ({ data, location, pathContext }) => {
      const post = data.markdownRemark;
      const { prev, next, title } = pathContext;
    ```

    * prev, next 링크 생성
    
    ```jsx{2-19}
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
    ```    
