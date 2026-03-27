import React, {Component} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './index.css'

class Header extends Component {
  render() {
    const {cartCount, restaurantName} = this.props

    return (
      <div className="header">
        <h1>{restaurantName}</h1>

        <div className="cart">
          <p>My Orders</p>
          <div className="cart-icon">
            <FaShoppingCart />
            <span>{cartCount}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
