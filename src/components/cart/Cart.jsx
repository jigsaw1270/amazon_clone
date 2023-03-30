import React from 'react';
import Product from '../product/Product';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;

    let total = 0;
    let totalship = 0 ;
    for (const product of cart){
        total = total + product.price;
        totalship = totalship + product.shipping;
    }
    const tax = total * 7 /100;
    const grandstotal = total + tax + totalship;
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>selected items :  {cart.length}</p>
            <p>Total Price : $ {total} </p>
            <p>Total Shipping :$ {totalship}  </p>
            <p>Tax :$ {tax} </p>
            <h6>Grand Total :$  {grandstotal}</h6>
        </div>
    );
};

export default Cart;