import React from 'react';
import { Order } from './Order';

export const Footer: React.FC = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <p>We're closed. We open at {openHour}:00.</p>
            )}
        </footer>
    );
};