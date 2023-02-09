import "./Banner.scss";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="Banner">
      <div className="Banner--content">
        <div className="Banner--content__img">
          <img
            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-parallax-img-1.jpg"
            alt=""
          />
        </div>
        <div className="Banner--content__title">
          <p>Gift bags &amp; Sets</p>
          <h4>Gifts &amp; sets for your loved ones</h4>
          <Link to="/shop">
          <button className="button--style Banner--button">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
