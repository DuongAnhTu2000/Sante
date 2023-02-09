import "./Cosmestic.scss";
import { Link } from "react-router-dom";

function Cosmetic() {
  return (
    <div className="Cosmetic--article">
      <div className="Cosmetic--container">
        <div className="Cosmetic--container__row">
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-1.jpg"
              alt=""
            />
            
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/detail"
                  rel="category tag"
                >
                  Cosmetics -
                </Link>
              </div>
              <div className="Cosmetics--content__tags">
                <Link
                 to="/detail"
                  rel="tag"
                >
                  Beauty
                </Link>
                <Link
                to="/detail"
                  rel="tag"
                >
                  Handmade
                </Link>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <Link
                  style={{ textDecoration: "none" }}
                  itemProp="url"
                  to="/detail"
                >
                  Cleansing scrub
                </Link>
                <p>
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button">
              <div className="Cosmetic--button__readmore">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-2.jpg"
              alt=""
            />
           
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/detail"
                  rel="category tag"
                >
                  Cosmetics -
                </Link>
              </div>
              <div className="Cosmetics--content__tags">
                <Link
                  to="/detail"
                  rel="tag"
                >
                  Beauty
                </Link>
                <Link
                  to="/detail"
                  rel="tag"
                >
                  Handmade
                </Link>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <Link
                  itemProp="url"
                  style={{ textDecoration: "none" }}
                 to="/detail"
                >
                  Nourish organic
                </Link>
                <p itemProp="description">
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button">
              <div className="Cosmetic--button__readmore">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="Cosmetic--container__row--col">
            <img
              src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h1-blog-list-img-3.jpg"
              alt=""
            />
            <div className="Cosmetics--content">
              <div className="Cosmetics--content__categories">
                <Link
                  style={{ textDecoration: "none" }}
                 to="/detail"
                  rel="category tag"
                >
                  Cosmetics -
                </Link>
              </div>
              <div className="Cosmetics--content__tags">
                <Link
                 to="/detail"
                  rel="tag"
                >
                  Beauty
                </Link>
                <Link
                  to="/detail"
                  rel="tag"
                >
                  Handmade
                </Link>
              </div>
            </div>
            <div className="Cosmetics--text">
              <h4>
                <Link
                  itemProp="url"
                  style={{ textDecoration: "none" }}
                 to="/detail"
                >
                  True botanicals
                </Link>
                <p itemProp="description">
                  Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                  expetendis in mei. Mei an pericula euripidis. hinc partem ei
                  estos ei
                </p>
              </h4>
            </div>
            <div className="Cosmetic--button ">
              <div className="Cosmetic--button__readmore ">
                <span>Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cosmetic;
