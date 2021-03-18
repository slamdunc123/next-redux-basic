import { GET_PRODUCTS } from './productTypes';

const initialState = {
	products: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_PRODUCTS:
			console.log('GET_PRODUCTS called', payload);
		return {
			...state,
			products: payload,
		};
		default:
			return state;
	}
}
