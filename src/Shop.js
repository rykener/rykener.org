import promo from "./img/promo_img.jpg";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div class="narrow-content">
      <h1>shop</h1>
      <Link to="/zine">
        <img src={promo} alt="cover"/>
        <h3>trans people talk about health insurance zine - $10</h3>
      </Link>
    </div>
  );
}

export default Shop;
