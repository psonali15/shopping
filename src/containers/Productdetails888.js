import {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import {selectedProduct} from '../redux/actions/productActions';

const ProductDetail = () => {
  console.warn("ssss");
    const {productId} = useParams();


     let product = useSelector((state) => state.product);

     const dispatch = useDispatch();

    // console.warn(product);

	 const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/1`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

	useEffect(()=> {
		if (productId && productId !== "") fetchProductDetail(productId); 
	
   
   return () => {
	console.log("ProductDetails :",product);

	// return(
	// 	<h2>ProductDetail Component</h2>
	// 	)
};
},[productId]);
}
export default ProductDetail