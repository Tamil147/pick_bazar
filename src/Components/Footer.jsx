

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-col">
                    <h2 className="footer-logo">Pick Bazar</h2>
                    <p className="footer-text">
                        Your one-stop shop for quality products at the best prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="footer-col">
                    <h4>Customer Service</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Returns</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe to get latest offers</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter email" />
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Pick Bazar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;