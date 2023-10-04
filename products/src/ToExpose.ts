import { addReducer } from 'SM';
import { ProductList } from './products/ProductList'
import { ProductSliceReducer, ProductSliceAction } from "./products/product.slice";

//inject Product Slice;
const ProductStateName = 'st_products'
addReducer(ProductStateName, ProductSliceReducer);

export {
    ProductStateName,
    ProductSliceAction,
    ProductList,
}