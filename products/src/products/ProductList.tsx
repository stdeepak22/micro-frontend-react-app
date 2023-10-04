import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModuleState, ProductSliceAction } from './product.slice';
import classes from './product.module.css'


const ProductItem = (props: any) => {
    return <div className={classes.productItem}>
        <div className={classes.pic}>
            <img src={props.p.thumbnail} />
        </div>
        <div className={classes.productInfo}>
            <span className={classes.title}>{props.p.title}</span>
            <span className={classes.description}>{props.p.description}</span>
            <span className={classes.price}>Rs {props.p.price}</span>
        </div>
        <div className={classes.action}>
            <button className={classes.addToCart} onClick={() => props.onAddToCart(props.p)}>+</button>
        </div>
    </div>
}


interface ProductListProps {
    actionOnAddToCart: Function;
}
const ProductList = (props: ProductListProps) => {
    const dis = useDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => dis(ProductSliceAction.setProducts(data.products)));
    }, [])
    const prs: ModuleState = useSelector((st: any) => st.st_products);

    const addToCart = (p: any) => {
        props.actionOnAddToCart(p);
    }
    return <div className={classes.productList}>
        {prs.products.map(c => <ProductItem key={c.id} p={c} onAddToCart={addToCart} />)}
    </div>
}

export { ProductList };