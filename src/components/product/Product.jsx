import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   const {img , name , seller,quantity ,price, ratings } = props.product;
 const carthandle= props.carthandle;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
            <p>Price : {price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} stars</p>
          </div>
          <button onClick={() => carthandle(props.product)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;