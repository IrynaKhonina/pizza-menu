import React from 'react';
import { Pizza } from './Pizza';
import { pizzaData } from '../data/pizzaData';

export const Menu: React.FC = () => {
    const numPizzas = pizzaData.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </main>
    );
};