import { useEffect } from 'react';

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerID);
        };
        //  eslint-disable-next-line
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{name} Added to cart</div>
        </div>
    );
}

export default Alert;
