import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false)
    const handleOpen = () => {
        setMenuToggle(prev => !prev)
    }
    return (
        <nav>
            <div className="logo">
                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" alt="" />

                <button>
                    <select>
                        <option value="">Grocery</option>
                        <option value="">Bakery</option>
                        <option value="">MakeUp</option>
                        <option value="">Bags</option>
                        <option value="">Clothing</option>
                    </select>
                </button>
            </div>
            <div className={`links ${menuToggle ? "menu-active" : ""}`}>

                <span className="close-icon" onClick={() => setMenuToggle(prev => !prev)}><IoClose /></span>
                <a href="">Shops</a>
                <a href="">Offers</a>
                <a href="">Contact</a>


                <a href="" className='pages'>
                    <span>Pages <span className='downarrow'><MdKeyboardArrowDown /></span></span>
                    <div className='pages-dropdown'>
                        <p>Flash sales</p>
                        <p>Authors</p>
                        <p>Manufacture/Publishers</p>
                        <p>FAQ</p>
                        <p>Terms and Condition</p>
                    </div></a>
                <button>Join</button>
                <button>Become a Seller</button>
            </div>

            <span className="menu-icon" onClick={handleOpen}  >
                <IoMenu />
            </span>
        </nav>
    )
}

export default Navbar