import promo from "./img/promo_img.jpg";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div class="narrow-content">
      <h1>shop</h1>
      <a href="https://www.etsy.com/listing/1159704899/trans-people-talk-about-health-insurance" rel="noreferrer" target="_blank">
        <img src={promo} alt="cover"/>
        <h3>trans people talk about health insurance zine - $10</h3>
      </a>
    </div>
  );
}

export default Shop;
