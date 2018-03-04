import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const Footer = ({ path, site }) => {
  return <Container as='footer' textAlign='center'>
    <Button
      basic
      as='a'
      href={`${site.github.url}/tree/master/${path}`}
      target='blank'
    >
      Edit on GitHub
    </Button>
  </Container>
}

export default Footer
