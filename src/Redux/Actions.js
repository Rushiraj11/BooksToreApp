import UserService from "../Service/UserService";
const userService = new UserService();


export const fetchBooksRequest = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST',
	};
};

export const fetchBooksSuccess = (books) => {
	return {
		type: 'FETCH_BOOKS_SUCCESS',
		payload: books,
	};
};

export const fetchBooksError = () => {
	return {
		type: 'FETCH_BOOKS_ERROR',
	};
};

export const incrementCartItem = (error) => {
	return {
		type: 'INCREMENT_ITEM',
		payload: error,
	};
};

export const decrementCartItem = () => {
	return {
		type: 'DECREMENT_ITEM',
	};
};

export const setCartItem = (cartItems) => {
	return {
		type: 'SET_ITEM',
		payload: cartItems,
	};
};

export const fetchBooks = () => {
	return (dispatch) => {
		dispatch(fetchBooksRequest());
		userService.GetBooks("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
			.then((res) => {
				dispatch(fetchBooksSuccess(res.data.result));
			})
			.catch((err) => dispatch(fetchBooksError(err)));
	};
};