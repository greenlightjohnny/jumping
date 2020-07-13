import React from "react"

import Img from "gatsby-image"

const itest = props => {
  const pics = props.data.allFile.edges
  const altText = ["text one", "text two", "text three", "text four"]

  return (
    <>
      {pics.map((pic, index) => {
        return (
          <div key={pic.node.id}>
            <Img fluid={pic.node.childImageSharp.fluid} alt={altText[index]} />
            <p>{altText[index]}</p>
          </div>
        )
      })}
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { extension: { regex: "/(png)/" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  }
`

export default itest
