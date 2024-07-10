
import './App.css';
import {Link } from 'react-router-dom';

import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import ProductsScreen from './Screens/ProductsScreen';


const openMenu = ()=>{
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu =()=>{
  document.querySelector(".sidebar").classList.remove("open");
}

function App() {
  return (
   
   
    <div className="container">
         
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to='/'>amazon</Link>
            

        </div>
        <div className="header_link">
            <a href="cart.html">cart</a>
            <a href="signin.html">sign in</a>
            
        </div>
        
    </header>
    <aside className="sidebar">
        <h4>shopping catagories</h4>
        <button className="sidebar-close" onClick={closeMenu}>x</button>
            
            <ul>
                <li>
                    <a href="index.html">miniskirt</a>
                </li>
                <li>
                    <a href="index.html">trousers</a>
                </li>
                <li>
                    <a href="index.html">t-shirts</a>
                </li>
                
            </ul>
            

    </aside>
    
    
    <main className="main">
        <div className="content">
        
        <HomeScreen />
        <ProductsScreen />
      
       
       

            
        </div>
        
        
    </main>
    <footer className="footer">
        all right reserved
    </footer>
</div>


    );
  }
  export default App

      