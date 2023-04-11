import styled from "styled-components";

const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandImage = styled.img`
  height: 50px;
  margin: 0 10px;
`;

const Brands = () => (
  <BrandsContainer>
    <a href="brand/Thrasher">
      <BrandImage
        className="thrasherlogo"
        src="https://logos-world.net/wp-content/uploads/2020/11/Thrasher-Logo.png"
      />
    </a>
    <a href="brand/Vans">
      <BrandImage
        className="vanslogo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Vans_%28brand%29_logo.png"
      />
    </a>
    <a href="brand/Nike">
      <BrandImage
        className="nikesblogo"
        src="https://coloringhome.com/coloring/bcy/pLr/bcypLrEqi.png"
      />
    </a>
    <a href="brand/Independent">
      <BrandImage
        className="independentlogo"
        src="https://independenttrucks.com/images/logos/independent-trucks-span.png"
      />
    </a>
    <a href="brand/Adidas">
      <BrandImage
        className="adilogo"
        src="data:image/png;base64,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"
      />
    </a>
  </BrandsContainer>
);

export default Brands;
