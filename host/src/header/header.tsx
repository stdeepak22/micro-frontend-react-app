import React from 'react'
import { Component, ErrorInfo, ReactInstance, ReactNode } from 'react'
import classes from './header.module.css';
import { connect } from 'react-redux'
import { CartStateType, CartStateName } from 'cart'
import { OtherSliceAction } from './../test-slice/OtherSlice'

interface HeaderComponentProps {
    CartStateName: CartStateType;
    onClick: Function
}
class _HeaderComponent extends Component<HeaderComponentProps> {
    props: HeaderComponentProps
    constructor(props: HeaderComponentProps) {
        super(props);
        this.props = props;
    }

    render(): ReactNode {
        return <div className={classes.nav}>
            <div className={classes.brand}>
                Host App
            </div>
            <div className={classes.menus}>
                [nav menu placeholder]
            </div>
            <div className={classes.cartInfo}>
                <button className={classes.cartButton} onClick={() => this.props.onClick()}>
                    {this.props.CartStateName.items.map((c: any) => c.qty).reduce((a: number, b: number) => a + b, 0)} items
                </button>
            </div>
        </div>
    }
}
export const HeaderComponent = connect((state: any) => ({ CartStateName: state[CartStateName] }), dispatch => ({
    onClick: () => dispatch(OtherSliceAction.toggleInlineCart(null))
}))(_HeaderComponent);