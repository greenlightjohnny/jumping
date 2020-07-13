import React from "react"

import Img from "gatsby-image"

const itest = props => {
  const pics = props.data.allFile.edges

  const altTwo = {
    swiss1: "THe end",
    swiss2: "Happy",
    norway: "More text here etc etc",
  }
  return (
    <div>
      {pics.map(pic => {
        let imgname = pic.node.childImageSharp.fluid.originalName
        imgname = imgname.slice(0, -4)

        return (
          <div key={pic.node.id}>
            <Img fluid={pic.node.childImageSharp.fluid} alt={altTwo[imgname]} />
            <p>{altTwo[imgname]}</p>
          </div>
        )
      })}
    </div>
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
