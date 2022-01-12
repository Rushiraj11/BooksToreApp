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