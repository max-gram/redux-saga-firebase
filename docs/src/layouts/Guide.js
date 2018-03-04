import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const Guide = ({ data }) => {
  const {
    file: {
      markdown: { frontmatter, html },
      sourceInstanceName
    },
    site: { siteMetadata: site }
  } = data

  return <div>
    <Header as='h1'>{ frontmatter.title }</Header>
    <div dangerouslySetInnerHTML={{ __html: html }} />

    <Container as='footer' textAlign='center'>
      <Button
        basic
        as='a'
        href={`${site.github.url}/tree/master/${site.docsDirectory}/${sourceInstanceName}`}
        target='blank'
      >
        Edit on GitHub
      </Button>
    </Container>
  </div>
}

export default Guide

export const pageQuery = graphql`
  query GuideByPath($fileName: String!) {
    site {
      siteMetadata {
        docsDirectory,
        github {
          url
        }
      }
    }
    file(name: { eq: $fileName }) {
      sourceInstanceName
      markdown: childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`
