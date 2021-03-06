import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 700,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          float: `right`,
        }}
      >
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          to={`/tags/`}
        >
          tags
        </Link>
        <span style={{ color: '#777' }}>&nbsp;|&nbsp;</span>
        {/* <Link style={{
          color: 'white',
          textDecoration: 'none',
        }} to={`/technotes/`}>
          tech-notes
        </Link>
        <span style={{ color: '#777' }}>&nbsp;|&nbsp;</span> */}
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          to={`/about/`}
        >
          about
        </Link>
      </div>
    </div>
  </div>
)

export default Header
