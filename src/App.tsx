import React from 'react';
import './index.css'
import './App.css';

type PizzaProps = {
    name: string;
    ingredients: string;
    photoName: string;
    price: number;
}

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

function App() {
  return (
      <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
      </div>
  );
}

export const Header =()=>{
  return (
      <header className='header'>
        <h1> PIZZA-MENU</h1>
      </header>
  )
}

export const Menu=()=> {
  return (
      <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza name="Pizza Spinaci"
               ingredients="Tomato, mozarella, spinach, and ricotta cheese"
               photoName="pizzas/spinaci.jpg"
               price={10}
        />
          <Pizza name="Pizza Spinaci"
                 ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                 photoName="pizzas/spinaci.jpg"
                 price={10}
          />

      </main>
  )
}
export const  Pizza =(props: PizzaProps)=> {
    const { name,ingredients,photoName, price } = props
    return (
        <div className="pizza">
            <img src={photoName} alt={photoName}/>
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </div>
    );
}
export const Footer=()=> {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 18;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <p>We're open until {closeHour}:00. Come visit us or order online.</p>
            ) : (
                <p>
                    We're closed. We open at {openHour}:00.
                </p>
            )}
        </footer>
    );
}



export default App;
