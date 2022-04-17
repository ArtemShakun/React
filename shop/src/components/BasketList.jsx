import BasketItem from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <i class="material-icons basket-close" onClick={handleBasketShow}>
                close
            </i>
            <li href="#!" className="collection-item active">
                Basket
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li href="#!" className="collection-item active">
                    Basket is empty
                </li>
            )}
            <li href="#!" className="collection-item active">
                <b>Total cost: {totalPrice} $</b>
            </li>
            <li href="#!" className="collection-item">
                <button className="btn btn-small">checkout</button>
            </li>
        </ul>
    );
}

export default BasketList;
