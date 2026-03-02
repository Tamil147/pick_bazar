import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'

const Checkout = () => {




    const cartItems = useSelector(state => state.cart.carts)

    const subTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    const delivery = 1.5;
    const total = subTotal + delivery;

    return (
        <>
            <Navbar />
            <section className="checkout">
                <div className="checkout-container">
                    {/* LEFT */}
                    <div className="checkout-left">
                        <h2>Delivery Details</h2>

                        <form className="checkout-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" placeholder="Enter phone number" />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <textarea placeholder="Enter delivery address"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Order Notes</label>
                                <textarea placeholder="Any instructions?"></textarea>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT */}
                    <div className="checkout-right">
                        <h2>Order Summary</h2>

                        <div className="order-items">
                            {cartItems.map((item) => (
                                <div className="order-item" key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <div className="item-info">
                                        <h4>{item.title}</h4>
                                        <p>
                                            {item.qty} × ${item.price}
                                        </p>
                                    </div>
                                    <span className="item-total">
                                        ${(item.qty * item.price).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="price-box">
                            <div>
                                <span>Subtotal</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Delivery</span>
                                <span>${delivery.toFixed(2)}</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="place-order-btn">Place Order</button>
                    </div>
                </div>
            </section>
            <Footer />






        </>
    )
}

export default Checkout