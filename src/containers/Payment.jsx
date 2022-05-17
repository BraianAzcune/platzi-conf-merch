import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/commonHandlers';
import '../styles/components/Payment.css';
// eslint-disable-next-line no-undef
const PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });

export default function Payment() {
    const navigate = useNavigate();
    const {
        state: { cart, buyer },
        addNewOrder,
    } = useContext(AppContext);

    const paypalOptions = {
        clientId:
            'AX6YRy07dR9M2l1JpJ7ppyzhdYSTu33RKyX3PlhVdN8nbcKpUGZ0q_BXwqWrNEVNmm5RkKeE0CTuKy4c',
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (payment) => {
        if (payment.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment,
            };
            addNewOrder(newOrder);
            navigate('/checkout/success');
        }
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div key={item.id} className="Payment-item">
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        amount={handleSumTotal(cart)}
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        onPaymentStart={() => console.info('inicia pago')}
                        onPaymentSuccess={handlePaymentSuccess}
                        onPaymentError={() => console.info('error en el pago')}
                        onPaymentCancel={() => console.info('canceló el pago')}
                    />
                </div>
            </div>
            <div>SIDE BAR</div>
        </div>
    );
}
