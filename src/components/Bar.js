import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Bar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="container">
        <Menu secondary>
        <Link to='/'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        </Link>

        <Link to='/news'>
        <Menu.Item
          name='news'
          active={activeItem === 'news'}
          onClick={this.handleItemClick}
        />
        </Link>

        <Link to='/exchanges'>
        <Menu.Item
          position="right"
          name='exchanges'
          active={activeItem === 'exchanges'}
          onClick={this.handleItemClick}
        />
        </Link>

       <Link to='/calculator'>
       <Menu.Item
          name='calculator'
          active={activeItem === 'calculator'}
          onClick={this.handleItemClick}
        />
       </Link>

      <Link to='/events'>
       <Menu.Item
          name='Events'
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        />
       </Link>
       
      </Menu>
      </div>
    )
  }
}

export default Bar