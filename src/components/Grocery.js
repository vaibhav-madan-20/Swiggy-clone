import React, { useEffect, useState } from 'react';
import '../utils/FloatingCarts.css';

const FloatingCart = ({ id, style }) => {
    return (
        <div className="floating-cart" style={style} title="Floating cart">
            🛒
        </div>
    );
};

const Grocery = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const generateRandomCarts = () => {
            const newCarts = Array.from({ length: 5 }, (_, i) => ({
                id: i,
                top: Math.random() * 80 + 'vh', // Random vertical position
                left: Math.random() * 90 + 'vw', // Random horizontal position
            }));
            setCarts(newCarts);
        };

        generateRandomCarts();

        const interval = setInterval(() => {
            generateRandomCarts();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grocery">
            <h1 className="text-center text-lg">Our grocery store</h1>
            <h2 className="text-center text-sm">Nothing to see here....</h2>
            {carts.map(cart => (
                <FloatingCart
                    key={cart.id}
                    id={cart.id}
                    style={{
                        position: 'absolute',
                        top: cart.top,
                        left: cart.left,
                        fontSize: '2rem',
                        cursor: 'pointer',
                        transition: 'top 0.5s, left 0.5s',
                    }}
                />
            ))}
        </div>
    );
};

export default Grocery;