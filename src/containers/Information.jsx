import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

export default function Information() {
    const {
        state: { cart },
        addToBuyer,
    } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            apto: formData.get('apto'),
            city: formData.get('city'),
            country: formData.get('country'),
            state: formData.get('state'),
            cp: formData.get('cp'),
            phone: formData.get('phone'),
        };
        console.log({ buyer });
        // another way.
        const buyer2 = Object.fromEntries(formData.entries());
        console.log({ buyer2 });
        addToBuyer(buyer);
        navigate('/checkout/payment');
    };

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            name="name"
                        />
                        <input
                            type="text"
                            placeholder="Correo electronico"
                            name="email"
                        />
                        <input
                            type="text"
                            placeholder="Direccion"
                            name="address"
                        />
                        <input type="text" placeholder="apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input
                            type="text"
                            placeholder="Codigo postal"
                            name="cp"
                        />
                        <input
                            type="text"
                            placeholder="Telefono"
                            name="phone"
                        />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">Regresar</Link>
                    </div>
                    <div className="Information-next">
                        <button onClick={handleSubmit} type="button">
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedidos:</h3>
                {cart.map((item) => (
                    <div key={item.id} className="Information-item">
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
