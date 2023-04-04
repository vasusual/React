import { skateshop } from "../../data";

const NewArrivals = () => {
  const hoodie = skateshop.HOODIES.find(item => item.hoodId === 6);
  const shoes = skateshop.SHOES.find(item => item.shoeId === 4);
  const deck = skateshop.DECKS.find(item => item.deckId === 7);
  const wheel = skateshop.WHEELS.find(item => item.id === 5);

  return (
    <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>New Arrivals</h1>

    <div style={{ display: "flex", justifyContent: "center" }}>
        
      <div style={{ flex: "1", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem" }}>{hoodie.hoodName}</h2>
        <img src={hoodie.hoodImg} alt={hoodie.hoodName} style={{ width: "80%" }} />
        <p style={{ fontSize: "1rem" }}>{hoodie.hoodBrand}</p>
        <p style={{ fontSize: "1rem" }}>${hoodie.hoodPrice}</p>
      </div>
      <div style={{ flex: "1", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem" }}>{shoes.shoeName}</h2>
        <img src={shoes.shoeImg} style={{ width: "80%" }} />
        <p style={{ fontSize: "1rem" }}>{shoes.shoeBrand}</p>
        <p style={{ fontSize: "1rem" }}>${shoes.shoePrice}</p>
      </div>
      <div style={{ flex: "1", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem" }}>{deck.deckName}</h2>
        <img src={deck.deckImage} style={{ width: "80%" }} />
        <p style={{ fontSize: "1rem" }}>{deck.deckBrand}</p>
        <p style={{ fontSize: "1rem" }}>${deck.deckPrice}</p>
      </div>
      <div style={{ flex: "1", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem" }}>{wheel.wheelName}</h2>
        <img src={wheel.wheelImage} style={{ width: "80%" }} />
        <p style={{ fontSize: "1rem" }}>{wheel.brand}</p>
        <p style={{ fontSize: "1rem" }}>${wheel.price}</p>
      </div>
    </div>
    </div>
  );
};

export default NewArrivals;
