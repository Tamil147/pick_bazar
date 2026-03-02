
import Products from '../Pages/Products.jsx'

const Home = () => {


    return (
        <div>
            <section className="hero">
                <div className="content">
                    <h1>Groceries Delivered in 90 Minute</h1>
                    <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                    <div className="input-group">
                        <input type="text" placeholder='Search your products from here' />
                        <button>Search</button>
                    </div>
                </div>

            </section>

            <section className="offers">
                <h1>features</h1>
                <div className="boxes">

                    <div className="box">
                        <img src=" https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?_gl=1*1wws46p*_ga*MjAwOTkyOTE5Ni4xNzcyMjk3ODEw*_ga_8JE65Q40S6*czE3NzIyOTc4MDkkbzEkZzAkdDE3NzIyOTc4MDkkajYwJGwwJGgw" alt="" />
                        <h3>Free Delivery</h3>
                    </div>


                    <div className="box">
                        <img src=" https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?_gl=1*lu47ss*_ga*MjAwOTkyOTE5Ni4xNzcyMjk3ODEw*_ga_8JE65Q40S6*czE3NzIyOTc4MDkkbzEkZzAkdDE3NzIyOTc4MDkkajYwJGwwJGgw" alt="" />
                        <h3>New Grocerys</h3>
                    </div>


                    <div className="box">
                        <img src="https://images.pexels.com/photos/4047288/pexels-photo-4047288.jpeg?_gl=1*6hvflt*_ga*MjAwOTkyOTE5Ni4xNzcyMjk3ODEw*_ga_8JE65Q40S6*czE3NzIyOTc4MDkkbzEkZzEkdDE3NzIyOTc5NjEkajUyJGwwJGgw" alt="" />
                        <h3>Happy Customers</h3>
                    </div>
                </div>
            </section>
            
            <section className='Main-product'>
            <Products />
            </section>
            



        </div>
    )
}

export default Home