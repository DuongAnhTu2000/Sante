import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import './Swiper.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';

function SwiperJs() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/detail');
  }
  return (
    <div className="wrap--slide">
      <div className="wrap--title">
        <h4 className="wrap--title__paragraph">Featured Items</h4>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <span className="swiper-slides-tag">Sale</span>
            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-1-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Cosmetics
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="swiper-product-price-discount">$120.00</span>
                    <span className="product-price">$95.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <span className="swiper-slides-tag">New</span>

            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-2-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Coco Skies
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$78.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <span className="swiper-slides-tag">Sale</span>

            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-3-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Coco Green
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="swiper-product-price-discount">$70.00</span>
                    <span className="product-price">$50.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-4-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$35.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-8-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$70.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <img src="	https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-10-img-1-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link rel="tag" to="/detail">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$25.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-7-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$45.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slides" style={{ textDecoration: 'none' }} onClick={handleClick}>
            <img src="	https://sante.qodeinteractive.com/wp-content/uploads/2020/09/product-6-img-1.jpg" alt="" />
            <div className="swiper-product">
              <div className="swiper-product-left">
                <div className="swiper-product-categories">
                  <h5 itemProp="name" className="swiper-product-title">
                    <Link itemProp="url" className="swiper-product-link" to="/detail">
                      Green Pack
                    </Link>
                  </h5>
                  <Link to="/detail" rel="tag">
                    Body Care
                  </Link>
                </div>
              </div>
              <div className="swiper-product-right">
                <div className="swiper-product-amount">
                  <div className="swiper-product-price">
                    <span className="product-price">$35.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperJs;
