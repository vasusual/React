import React from "react";
import { Envelope, MapPin, Phone } from "phosphor-react";

const ContactsPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "3rem" }}>Contact Us</h1>
      <p style={{ fontSize: "1.5rem" }}>We would love to hear from you. Please contact us with any questions or concerns you may have.</p>
      <ul style={{ fontSize: "1.5rem", textAlign: "center" }}>
        <li><Phone size={24} /> +74954954995</li>
        <li><Envelope size={24} /> skate@shop.com</li>
        <li><MapPin size={24} /> Ulitsa Pushkina, 42/2, 102332, Moscow</li>
      </ul>
    </div>
  );
};

export default ContactsPage;
