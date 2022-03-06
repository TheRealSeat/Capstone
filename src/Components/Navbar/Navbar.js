import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/Events'>
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/'>
          <Menu.Item
            name='Fans'
            active={activeItem === 'Fans'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/'>
          <Menu.Item
            name='Organizers'
            active={activeItem === 'Organizers'}
            onClick={this.handleItemClick}
          />
        </Link>
        </Menu>
      </Segment>
    )
  }
}
