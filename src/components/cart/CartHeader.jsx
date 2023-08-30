const CartHeader = (props) => {
    // eslint-disable-next-line react/prop-types
    const cartTitleHeader = props.title;
    return <h2 className="center-align">{cartTitleHeader}</h2>;
};

export default CartHeader;
