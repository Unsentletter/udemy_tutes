import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';

import './ShoppingCart.css';

class ShoppingCart extends Component {
  renderShoppingCart = () => {
    const { shoppingCart, removeFromCartDispatch } = this.props;
    return shoppingCart.map((item) => {
      return(
        <li
          onClick={() => removeFromCartDispatch(item.id)}
          key={shoppingCart.id}
          className={'SC-List-Item'}
        >
          <img role="presentation" src={item.link}/>
          <span>{item.title}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'SC-list'}>
        {this.renderShoppingCart()}
      </ul>
    )
  }
}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
