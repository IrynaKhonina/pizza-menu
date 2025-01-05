import React from 'react';
import './index.css';
import './App.css';

// Тип для пропсов компонента Pizza
type PizzaProps = {
    pizzaObj: {
        name: string;
        ingredients: string;
        photoName: string;
        price: number;
        soldOut: boolean;
    };
};

// Данные о пиццах
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

// Основной компонент App
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// Компонент Header
export const Header = () => {
    return (
        <header className="header">
            <h1>PIZZA MENU</h1>
        </header>
    );
};

// Компонент Menu
export const Menu = () => {
    // Если массив пуст, показываем сообщение
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

// Компонент Pizza
export const Pizza = ({ pizzaObj }: PizzaProps) => {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
};

// Компонент Footer
export const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>We're open until {closeHour}:00. Come visit us or order online.</p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>We're closed. We open at {openHour}:00.</p>
            )}
        </footer>
    );
};

export default App;