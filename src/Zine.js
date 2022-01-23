import promo from "./img/promo_img.jpg";

function Zine() {
  return (
    <div class="medium-content zine">
      <h1>trans people talk about health insurance</h1>
        <img src={promo} alt=""/>
        <p>
          "trans people talk about insurance" is a collection of single panel comics that are sometimes funny, cathartic, and more then a little melancholy. i hope they help trans folks struggling with the medical system feel less alone. if you're a cis ally, maybe you can learn from the stories and experiences printed inside. 16 pages, printed on 100lb card stock.
        </p>
      <h2>
        <a href="https://www.etsy.com/listing/1148245786/trans-people-talk-about-health-insurance" target="_blank">
          $10 - click here to buy on etsy
        </a>
      </h2>
    </div>
  );
}

export default Zine;
