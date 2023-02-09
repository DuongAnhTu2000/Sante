import "./Categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="product--categories">
        <div className="product--categories__row">
          <div className="product--container__row__col">
            <Link
              itemProp="url"
               to="/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-1.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Organic</h3>
                <h4>Natural</h4>
              </div>
            </Link>
          </div>
          <div className="product--container__col">
            <Link
              itemProp="url"
              to="/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-2.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Scrub</h3>
                <h4>Body Care</h4>
              </div>
            </Link>
          </div>
          <div className="product--container__col">
            <Link
              itemProp="url"
              to="/"
              target="_self"
            >
              <div className="product--image">
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h1-banner-img-3.jpg" alt="" />
              </div>
              <div className="product--image__content">
                <h3>Creamy</h3>
                <h4>Selfcare</h4>
              </div>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Categories;
