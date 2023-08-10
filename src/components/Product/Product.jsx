import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {img,name, seller,ratings, price, quantity}  = props.product;
    const handleAddToCart = props.handleAddToCart;

   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='name'>{name}</h5>
            <h4>Price :${price}</h4>
            <h4>Manufacturer : {seller}</h4>
            <h4>Ratting : {ratings}stars</h4>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='add-cart'> Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;