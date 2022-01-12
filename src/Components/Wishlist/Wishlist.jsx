import React from 'react'
import Header from '../Header/Header';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import UserService from '../../Service/UserService';
import './Wishlist.css';
const userService = new UserService();


function Wishlist() {
    // const history = React.useHistory();
	const [wishList, setWishList] = React.useState([]);
	const [watchState, setWatchState] = React.useState(false);

	// Navigate to home
	const handleClick = () => {
		// history.push('/HomePage');
	};


	const wishListItems = () => {
		userService.GetWishList("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items")
			.then((res) => {
				setWishList(res.data.result);
			})
			.catch((err) => console.warn(err));
	};


	React.useEffect(() => {
		wishListItems();
	}, [watchState]);

	
	const removeBook = (bookId) => {
		userService.RemoveWishList(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${bookId}`)
			.then(() => {
				setWatchState(!watchState);
			})
			.catch((err) => {
				console.log(err);
			});
	};


    return (
        <div>
           <Header />
			<div className='wish-list-main-container'>
				<div className='wish-list-inner-container'>
					<div className='my-cart-header'>
						<span
							style={{
								color: '#9D9D9D',
								marginRight: '3px',
								cursor: 'pointer',
							}}
							onClick={handleClick}
						>
							Home /
						</span>
						<span>My WishList</span>
					</div>
					<div className='wish-list-heading'>
						My WishList ( {wishList.length} )
					</div>
					<div className='wish-list-display-all'>
						{wishList.map((book) => (
							<div key={book._id} className='wishlistSingleBookContainer'>
								<div className='wishlistImgAndInfoContainer'>
									<div className='wishlistBookImgContainer'>
										<div className='wishlistBookImg'></div>
									</div>
									<div className='wishlistBookInfoContainer'>
										<div className='wishlistBookName'>
											{book.product_id.bookName}
										</div>
										<div className='wishlistBookAuthor'>
											by {book.product_id.author}
										</div>
										<div className='wishlistBookPriceContainer'>
											<div className='wishlistBookNewPrice'>
												Rs. {book.product_id.discountPrice}
											</div>
											<div className='wishlistBookOldPrice'>
												Rs. {book.product_id.price}
											</div>
										</div>
									</div>
								</div>
								<div className='wishlistButtonsContainer'>
									<div
										className='removeFromWishlistBtn'
										onClick={() => removeBook(book.product_id._id)}
									>
										<DeleteOutlineOutlinedIcon
											style={{ width: '100%', height: '100%' }}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<br />
        </div>
    )
}

export default Wishlist
