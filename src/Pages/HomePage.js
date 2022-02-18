import React from 'react'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
    <Container>
        <Header as='h1' inverted>
           TheRealSeat
        </Header>
        <Button size='huge' inverted >
            Get started
            <Icon name='right arrow' inverted/>
        </Button>
    </Container>
</Segment>
  )
}

export default HomePage