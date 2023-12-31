import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart = [];
        // step 1 : get id
        for(const id in storedCart){
            // step 2 : get the product using id
            const savedProduct = products.find(product => product.id === id)
            // step 3 : get quantity of the product
            if(savedProduct){
                // add quantity
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                // step 4 : add the addedproduct to the saved cart
                savedCart.push(savedProduct)
            }
            
        }
        // step 5 : save the cart
        setCart(savedCart);
    },[products])


    const handleAddToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart)
       addToDb(product.id) 
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;