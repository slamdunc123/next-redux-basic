import { GET_PRODUCTS } from './productTypes';

// get products
export const getProducts = () => async (dispatch) => {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();

		dispatch({
			type: GET_PRODUCTS,
			payload: data,
		});
	} catch (err) {
		console.error(err.error);
	}
};
