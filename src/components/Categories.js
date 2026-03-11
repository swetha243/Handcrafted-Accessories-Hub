import React, { useState } from "react";
import Cart from "./Cart";

import bags from "../images/bags.jpg";
import bracelets from "../images/bracelets.jpg";
import crochet from "../images/crochet.jpg";
import hairbands from "../images/hair-bands.jpg";
import keychains from "../images/keychains.jpg";

import miniBag from "../images/mini-bag.jpg";
import blackBeadBracelet from "../images/black-bead-bracelet.jpg";
import beadedBracelet from "../images/beaded-bracelet.jpg";
import crochetBouquet from "../images/crochet-bouquet.jpg";
import crochetGlassHolder from "../images/crochet-glass-holder.jpg";
import crochetPotHolder from "../images/crochet-pot-holder.jpg";
import scrunchie from "../images/scrunchie.jpg";
import crochetKeychain from "../images/crochet-keychain.jpg";
import setKeychain from "../images/set-keychain.jpg";
import phoneCharm from "../images/phone-charm.jpg";
import heartfeltPhoneCharm from "../images/heartfelt-phone-charm.jpg";


const categoryData = [
  { name: "Bags", img: bags },
  { name: "Bracelets", img: bracelets },
  { name: "Crochet", img: crochet },
  { name: "Hair Bands", img: hairbands },
  { name: "Keychains", img: keychains },
];

const products = [
  { name: "Bags", category: "Bags", img: bags },
  { name: "Mini Bag", category: "Bags", img: miniBag },
  { name: "Bracelets", category: "Bracelets", img: bracelets },
  { name: "Black Bead Bracelet", category: "Bracelets", img: blackBeadBracelet },
  { name: "Beaded Bracelet", category: "Bracelets", img: beadedBracelet },
  { name: "Crochet", category: "Crochet", img: crochet },
  { name: "Crochet Bouquet", category: "Crochet", img: crochetBouquet },
  { name: "Crochet Glass Holder", category: "Crochet", img: crochetGlassHolder },
  { name: "Crochet Pot Holder", category: "Crochet", img: crochetPotHolder },
  { name: "Hair Bands", category: "Hair Bands", img: hairbands },
  { name: "Scrunchie", category: "Hair Bands", img: scrunchie },
  { name: "Keychains", category: "Keychains", img: keychains },
  { name: "Crochet Keychain", category: "Keychains", img: crochetKeychain },
  { name: "Set Keychain", category: "Keychains", img: setKeychain },
  { name: "Phone Charm", category: "Keychains", img: phoneCharm },
  { name: "Heartfelt Phone Charm", category: "Keychains", img: heartfeltPhoneCharm },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <section className="categories" style={{ 
      textAlign: "center", 
      padding: "50px" }}>
      <h2>Categories</h2>

      <div className="category-container" style={{ 
        display: "flex", 
        justifyContent: "center", 
        flexWrap: "wrap", 
        gap: "20px", 
        marginTop: "20px" }}>
        {categoryData.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            style={{ 
              cursor: "pointer", 
              width: "150px" }}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.img} alt={cat.name} style={{ 
              width: "100%", 
              height: "150px", 
              objectFit: "cover" }} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <>
          <h3 style={{ marginTop: "40px" }}>{selectedCategory} Products</h3>
          <div className="product-container" style={{ 
            display: "flex", 
            justifyContent: "center", 
            flexWrap: "wrap", 
            gap: "20px", 
            marginTop: "20px" }}>
            {products
              .filter((prod) => prod.category === selectedCategory)
              .map((prod, idx) => (
                <div key={idx} className="product-card" style={{ 
                  width: "180px", 
                  border: "1px solid #000000", 
                  padding: "10px", 
                  borderRadius: "8px" }}>
                  <img src={prod.img} alt={prod.name} style={{ 
                    width: "100%", 
                    height: "150px", 
                    objectFit: "cover" }} />
                  <p>{prod.name}</p>
                  <button onClick={() => handleAddToCart(prod)} style={{ 
                    marginTop: "10px", 
                    padding: "10px" }}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      )}

      <div style={{ marginTop: "50px" }}>
        <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} />
      </div>
    </section>
  );
}

export default Categories;