import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'
export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        <NavLink to='/'>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to='/Events'>
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to='/'>
          <Menu.Item
            name='Fans'
            active={activeItem === 'Fans'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to='/'>
          <Menu.Item
            name='Organizers'
            active={activeItem === 'Organizers'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        </Menu>
      </Segment>
    )
  }
}

