import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStart, fetchSuccess, fetchFail, addToQty, removeQty } from '../Slice/productSlice'
import { IoBagCheck } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { addtocart, decreaseQty, increaseQty, removeCart } from '../Slice/cartSlice';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cartActive, setCartActive] = useState(false)
    const { products, isLoading, error } = useSelector(state => state.products)
    const cart = useSelector(state => state.cart.carts);
    const API_URL = "https://dummyjson.com/products"

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                dispatch(fetchStart());
                const res = await axios.get(API_URL);
                dispatch(fetchSuccess(res.data.products));
            } catch (error) {
                dispatch(fetchFail(error.message));
            }
        };

        fetchProducts();
    }, [dispatch])

    const getQty = (productId) => {
        const item = cart.find(c => c.id === productId)
        return item ? item.qty : 0
    }


    const cartTotal = cart.reduce((sum, item) => {
        return sum + item.price * item.qty
    }, 0)







    return (

        <>
            <section className={`cart ${cartActive ? "" : "cart-active"}`}>
                <div className="top">
                    <span className='cart-close' onClick={() => setCartActive(prev => !prev)}><IoClose /></span>
                    <h2> <span><MdOutlineShoppingBag /></span> {cart.length} Cart</h2>
                </div>
                <div className="cart-list">
                    {cart.map((item, i) => {
                        return (
                            <div className="card-item" key={i}>
                                <div className="left">
                                    <button className='btn-active'><span onClick={() => dispatch(increaseQty(item.id))}>+</span><p>{item.qty}</p><span onClick={() => dispatch(decreaseQty(item.id))}>-</span></button>
                                    <img src={item.thumbnail} alt="cart Img" />
                                    <div className="cart-content">
                                        <h2>{item.title}</h2>
                                        <h3>{Math.floor(item.price)}</h3>
                                        <p>{item.qty} x {item.price}</p>
                                    </div>

                                </div>
                                <div className="remove-cart">
                                    <h3>{Math.floor(item.qty * item.price)}</h3>
                                    <span className='cart-close' onClick={() => dispatch(removeCart(item.id))}><IoClose /></span>
                                </div>
                            </div>
                        )
                    })}

                    <button className='checkout-btn' onClick={() => navigate("/checkout")}><p>Checkout</p><span>{Math.floor(cartTotal)}</span></button>
                </div>
            </section>
            <h1>Products</h1>
            <section className='products'>
                <section className='cart-info' onClick={() => setCartActive(prev => !prev)}>
                    <p><span><MdOutlineShoppingBag /></span> {cart.length || 0} Items</p>
                    <button>${Math.floor(cartTotal)}</button>
                </section>


                {products.map((product, i) => {

                    const qty = getQty(product.id)
                    return (
                        <div key={i} className='product'>
                            <div className="product-img">
                                <span className='dis-patch'>{Math.floor(product.discountPercentage)}%</span>
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <div className="product-details">
                                <h2>{product.title}</h2>
                                <p className='dis-price'>${Math.floor(product.price + (product.price * product.discountPercentage / 100))}</p>
                                <div className="cart-btns">
                                    <div className="prices">
                                        <p className='price'>${product.price}</p>
                                    </div>
                                    <div className="cart-btn">
                                        {qty >= 1 ? <button className='btn-active'><span onClick={() => dispatch(increaseQty(product.id))}>+</span><input type="number" min={0} value={qty} readOnly /><span onClick={() => dispatch(decreaseQty(product.id))}>-</span></button> : <button className='btn-noActive' onClick={() => {
                                            dispatch(addtocart(product))
                                            dispatch(addToQty(product))
                                        }}><span><IoBagCheck /></span> Cart</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {isLoading && <p>Loading</p>}
                {products.length == 0 ? <p>Empty Products</p> : null}

            </section>
        </>

    )
}

export default Products