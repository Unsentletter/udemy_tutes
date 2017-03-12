import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';
import './Items.css'

class Items extends Component {

  renderList = () => {
    const { items, addToCartAction } = this.props;
    return items.map((item) => (
      <li
        key={item.id}
        className={'Items-list-item'}
        onClick={() => addToCartAction(item)}
      >
        <img role="presentation" className={'Items-image'} src={item.link}/>
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <ul className={'Items-list'}>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  items: reduxState.items
})

const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
