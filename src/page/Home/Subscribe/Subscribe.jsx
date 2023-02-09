import "./Subscribe.scss";
import { Link } from "react-router-dom";

function Subscribe() {
  return (
    <div className="Subscribe--container">
      <div className="Subscribe--container__wrap">
        <div className="Slide--Paragraph__title">
          <span>Newsletter</span>
          <h4>Sign Up For News</h4>
        </div>
        <div className="Subscribe--form">
          <input
            type="email"
            name="your-email"
            size={100}
            aria-required="true"
            placeholder="Your e-mail..."
          />
          <div>
            <Link to="/shop">
              <button type="button" className="button--style Subscribe--button">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
