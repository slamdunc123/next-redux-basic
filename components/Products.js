import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/product/productActions';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productReducer.products); //gets from rootReducer which has productReducer imported

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<div>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
