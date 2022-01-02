import React from 'react'
import education from '../../Assets/education.png'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Header.css"

function Header() {


    return (
        <div className="main-Header-Container">
        <div className="logo-container">
          <div className="logo">
            <img src={education} />
          </div>
          <div className="logo-Text">Bookstore</div>
        </div>
        <div className="search-Box">
         <div ClassName="search-Icon"><SearchOutlinedIcon/></div> 
          <input type="text" className="search-Input" placeholder="Search " />
        </div>
        <div className="Last-Icon">
          <div className=" Profile-Icon">
            <PermIdentityOutlinedIcon />
            Profile
          </div>
          <div className="Cart-Icon" >
            <ShoppingCartOutlinedIcon />
            Cart
          </div>
        </div>
      </div>
    )
}

export default Header
