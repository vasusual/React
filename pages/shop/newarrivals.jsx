import { skateshop } from "../../data";

const NewArrivals = () => {
  const hoodie = skateshop.HOODIES.find((item) => item.id === 76) || {};
  const shoes = skateshop.SHOES.find((item) => item.id === 52) || {};
  const deck = skateshop.DECKS.find((item) => item.id === 7) || {};
  const wheel = skateshop.WHEELS.find((item) => item.id === 36) || {};

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        New Arrivals
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img src={hoodie.image} alt={hoodie.name} style={{ width: "80%" }} />
          <p style={{ fontSize: "1.5rem" }}>{hoodie.name}</p>
          <p style={{ fontSize: "1rem" }}>{hoodie.brand}</p>
          <p style={{ fontSize: "1rem" }}>${hoodie.price}</p>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img src={shoes.image} alt={shoes.name} style={{ width: "80%" }} />
          <p style={{ fontSize: "1.5rem" }}>{shoes.name}</p>
          <p style={{ fontSize: "1rem" }}>{shoes.brand}</p>
          <p style={{ fontSize: "1rem" }}>${shoes.price}</p>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img src={deck.image} alt={deck.name} style={{ width: "40%" }} />
          <p style={{ fontSize: "1.5rem" }}>{deck.name}</p>
          <p style={{ fontSize: "1rem" }}>{deck.brand}</p>
          <p style={{ fontSize: "1rem" }}>${deck.price}</p>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <img src={wheel.image} alt={wheel.name} style={{ width: "80%" }} />
          <p style={{ fontSize: "1.5rem" }}>{wheel.name}</p>
          <p style={{ fontSize: "1rem" }}>{wheel.brand}</p>
          <p style={{ fontSize: "1rem" }}>${wheel.price}</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
