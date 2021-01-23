import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby"
import Footer from "@components/footer.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}<button onClick={() => scrollTo('html')}>トップに戻る</button>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
