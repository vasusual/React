import styled from 'styled-components';

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
    <BrandImage className="thrasherlogo" src="https://logos-world.net/wp-content/uploads/2020/11/Thrasher-Logo.png" />
    <BrandImage className="vanslogo" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Vans_%28brand%29_logo.png" />
    <BrandImage className="nikesblogo" src="https://coloringhome.com/coloring/bcy/pLr/bcypLrEqi.png" />
    <BrandImage className="independentlogo" src="https://independenttrucks.com/images/logos/independent-trucks-span.png" />
    <BrandImage className="polarlogo" src="https://skate.fr/wp-content/uploads/2020/08/polar-skate-logo-large.jpg" />

  </BrandsContainer>
);

export default Brands;
