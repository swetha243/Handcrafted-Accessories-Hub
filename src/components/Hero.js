import Categories from "./Categories";
import Products from "./Products";

function Hero() {
  return (
    <div>

      <section id="home" style={{ textAlign: "center", padding: "80px" }}>
        <h1>Beautiful Handmade Accessories</h1>
        <p>Discover bracelets, hair clips, keychains and bags</p>

        <button
          onClick={() => {
            document.getElementById("products").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Shop Now
        </button>

      </section>

      <section id="categories">
        <Categories/>
      </section>

      <section id="products">
        <Products/>
      </section>

    </div>
  );
}

export default Hero;