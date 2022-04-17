function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li href="#!" className="collection-item ">
            {name}{' '}
            <i
                class="material-icons basket-remove basket-quantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            x{quantity}
            <i
                class="material-icons basket-remove basket-quantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity} $
            <span
                class="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i class="material-icons basket-remove">
                    remove_circle_outline
                </i>
            </span>
        </li>
    );
}

export default BasketItem;
