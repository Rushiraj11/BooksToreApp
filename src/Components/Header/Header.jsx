import React from 'react'
import education from '../../Assets/education.png'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Header.css"
import Popper from '@mui/material/Popper';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";




function Header(props) {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

  const openHome = () => {
    history.push('/HomePage')
  };

  const openWishlist = () => {
    history.push('/HomePage/Book/Wishlist')
  };
  const openCartItem = () => {
    props.cartItems();
    history.push('/HomePage/Book/Cart')
  };

    return (
        <div className="main-Header-Container">
        <div className="logo-container">
          <div className="logo" onClick={openHome}>
            <img src={education} />
          </div>
          <div className="logo-Text">Bookstore</div>
        </div>
        <div className="search-Box">
         <div ClassName="search-Icon"><SearchOutlinedIcon/></div> 
          <input type="text" className="search-Input" placeholder="Search " />
        </div>
        <div className="Last-Icon">
        <div className='profile-cart'onClick={handleClick}>
          <div className=" Profile-Icon">
            <PermIdentityOutlinedIcon />
            Profile
          </div>
          <Popper
							open={open}
							anchorEl={anchorEl}
							placement='bottom-end'
						>
							<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
								<div className='popper-container'>
									<div className='popper-heading'></div>
									<div className='popper-content'>
										<PersonOutlineOutlinedIcon  /> Profile
									</div>
									<div className='popper-content'>
										<ShopOutlinedIcon  /> My Order
									</div>
									<div className='popper-content' onClick={openWishlist}>
										<FavoriteBorderOutlinedIcon  /> My Wishlist
									</div>
									<div className='popper-btn-container'>
										<div
											className='popper-btn-inner-container'
											
										>
											<span className='popper-btn'>Logout</span>
										</div>
									</div>
								</div>
							</ClickAwayListener>
						</Popper>
</div>
          <div className="Cart-Icon" onClick={openCartItem}>
            <ShoppingCartOutlinedIcon />
            Cart
          </div>
        </div>
      </div>
    )
}
const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItemReducer.cartItems,
	};
};

export default connect(mapStateToProps)(Header);
