import { useEffect, useState } from 'react';

const FloatingCart = ({ style }) => {
    return (
        <div style={style} title="Floating cart">
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
                top: Math.random() * 90 + 'vh', // Random vertical position
                left: Math.random() * 100 + 'vw', // Random horizontal position
            }));
            setCarts(newCarts);
        };

        generateRandomCarts();

        const interval = setInterval(() => {
            generateRandomCarts();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#f9f9f9]" style={{height: "calc(100vh - 72px)"}}>
            <h1 className="text-center text-lg">Our grocery store</h1>
            <h2 className="text-center text-sm">Nothing to see here....</h2>
            {carts.map(cart => (
                <FloatingCart
                    key={cart.id}
                    style={{
                        position: 'absolute',
                        top: cart.top,
                        left: cart.left,
                        fontSize: '2rem',
                        cursor: 'pointer',
                        transition: 'top 0.5s, left 0.5s',
                        animation: 'float 2s ease-in-out infinite alternate',
                    }}
                />
            ))}
        </div>
    );
};

export default Grocery;