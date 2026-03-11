import React from "react";

import bags from "../images/bags.jpg";
import miniBag from "../images/mini-bag.jpg";
import bracelets from "../images/bracelets.jpg";
import beadedBracelet from "../images/beaded-bracelet.jpg";
import hairbands from "../images/hair-bands.jpg";
import scrunchie from "../images/scrunchie.jpg";
import keychains from "../images/keychains.jpg";
import setKeychain from "../images/set-keychain.jpg";
import crochet from "../images/crochet.jpg";

function Products() {
  return (
    <section id="products">
      <section className="products">
        <h2>All Products</h2>

        <div className="product-container">

          <div className="product-card">
            <img src={bags} alt="Tote Bag" />
            <h3>Tote Bag</h3>
            <p>₹450</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={miniBag} alt="Mini Bag" />
            <h3>Mini Bag</h3>
            <p>₹350</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={bracelets} alt="Charm Bracelet" />
            <h3>Charm Bracelet</h3>
            <p>₹150</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={beadedBracelet} alt="Beaded Bracelet" />
            <h3>Beaded Bracelet</h3>
            <p>₹180</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={hairbands} alt="Hair Bands" />
            <h3>Hair Bands</h3>
            <p>₹120</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={scrunchie} alt="Scrunchie" />
            <h3>Scrunchie</h3>
            <p>₹100</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={keychains} alt="Metal Keychain" />
            <h3>Metal Keychain</h3>
            <p>₹100</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={setKeychain} alt="Keychain Set" />
            <h3>Keychain Set</h3>
            <p>₹180</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={crochet} alt="Crochet Items" />
            <h3>Crochet Items</h3>
            <p>₹250</p>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>
    </section>
  );
}

export default Products;