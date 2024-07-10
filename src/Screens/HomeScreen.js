import React from 'react';
import data from '../data.js';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const { products } = data;
  console.log("products",products)
  console.log("products",products.id)

  return (
    
        


    <div className="product-list">
      <ul>
        {products.map((product => 
          <li key={product.id} className="product">
            <img className="product-image" src={product.Image} alt={product.name} />
            <div className="product-details">
             <Link to={'/product'}>{product.name}</Link>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">{product.rating}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
