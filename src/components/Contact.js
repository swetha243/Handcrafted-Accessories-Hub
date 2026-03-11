import React from "react";

function Contact() {
  return (
    <section className="contact">

      <h2>Order Your Favorite Accessories</h2>

      <p>
        To place an order or know more details about our handmade products,
        contact us through WhatsApp.
      </p>

      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        Order on WhatsApp
      </a>

    </section>
  );
}

export default Contact;