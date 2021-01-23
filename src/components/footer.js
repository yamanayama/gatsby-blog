import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

    return (
        <footer>
            <p>© {data.site.siteMetadata.title} { (new Date()).getFullYear() }</p>
        </footer>
    )
}

export default Footer
