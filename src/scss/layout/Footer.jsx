import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer--container">
      <div className="Footer--container__wrap">
        <div className="Footer--top">
          <div className="Footer--top__item">
            <h4>About us</h4>
            <span>
              Your nature-inspired supplier of all-organic and fresh produce for
              all your daily needs. We offer skin treatments, nutrition advisory
              and more.
            </span>
          </div>
          <div className="Footer--top__item">
            <h4>Contact us</h4>
            <div>
              <a
                itemProp="url"
                href="https://www.google.com/maps/place/27+Rue+du+Calvaire,+60000+Till%C3%A9,+France/@49.4674853,2.1140513,17z/data=!3m1!4b1!4m5!3m4!1s0x47e7070a0dade3c9:0xa6e0b3fc2525e147!8m2!3d49.4674818!4d2.11624"
                target="_blank"
                rel="noreferrer"
              >
                <span className="lnr lnr-apartment icon" />
                <span>27 Rue du Aire 60000 Tillé, France</span>
              </a>
            </div>
            <div>
              <a itemProp="url" href="tel:0058955668856944" target="_self">
                <span className="lnr lnr-phone icon" />
                <span className="qodef-e-title-text">+589 55668 8569 44</span>
              </a>
            </div>
            <div>
              <a
                itemProp="url"
                href="mailto:sante@qodeinteractive.com"
                target="_self"
              >
                <span className="lnr lnr-envelope icon" />
                <span className="qodef-e-title-text">
                  sante@qodeinteractive.com
                </span>
              </a>
            </div>
          </div>
          <div className="Footer--top__item">
            <h4>Profile</h4>
            <div>
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/my-account/"
                target="_self"
              >
                <span className="lnr lnr-user icon" />
                <span className="qodef-e-title-text">My account</span>
              </a>
            </div>
            <div>
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/checkout/"
                target="_self"
              >
                <span className="lnr lnr-tag icon" />
                <span className="qodef-e-title-text">Checkout</span>
              </a>
            </div>
            <div>
              <a
                itemProp="url"
                href="https://sante.qodeinteractive.com/wishlist/"
                target="_self"
              >
                <span className="lnr lnr-eye icon" />
                <span className="qodef-e-title-text">Wishlist</span>
              </a>
            </div>
          </div>
          <div className="Footer--top__item">
            <h4>Payment</h4>
            <p>
              <span >
                Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
                expet.
              </span>
            </p>
            <img src={("https://sante.qodeinteractive.com/wp-content/uploads/2020/09/futer-img-1.png")}  alt="" />
          </div>
        </div>
        <div className="Footer--bottom">
          <div className="Footer--bottom__item">
            <a href="https://sante.qodeinteractive.com/">
              <img
                width={43}
                height={43}
                src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/h3-futer-img.png"
                alt=""
              />
            </a>
            <p>
              Copyright © 2021
              <a
                href="https://qodeinteractive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qode Interactive
              </a>
              , All Rights Reserved
            </p>
          </div>
          <div className="Footer--bottom__item item--right">
            <p style={{ fontWeight: 600 }}>Follow us: &nbsp;</p>
            <a
              itemProp="url"
              href="https://www.facebook.com/QodeInteractive/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f header--left__icon" />
            </a>
            <a
              itemProp="url"
              href="https://twitter.com/QodeInteractive"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter header--left__icon" />
            </a>
            <a
              itemProp="url"
              href="https://www.instagram.com/qodeinteractive/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram header--left__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
