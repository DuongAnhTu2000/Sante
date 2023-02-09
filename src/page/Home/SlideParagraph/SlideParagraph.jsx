import "./SlideParagraph.scss";

function SlideParagraph() {
  return (
    <div className="Slide--Paragraph">
      <div className="Slide--Paragraph__title">
        <span>Testimonials</span>
        <h2>Our happy customers</h2>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner content--fix">
          <div className="carousel-item active">
            <div className="Slide--Paragraph__content">
              <h4>
                « Mei an pericula euripidis. phaedrum torquatos nec eu, detr
                periculis ex, nihil expetendis in mei hinc partem ei est. Eos ei
                nisl graecis, vix aperiri lorem ispsum consequat an. Eius lorem
                tincidunt vix, vel pertinax sensibus, error epicurei mea ei. »
              </h4>
              <div className="Slide--Paragraph__author">
                <span>Miranda Bloome </span>
                <span>Cosmetics </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Slide--Paragraph__content">
              <h4>
                « Torquatos nec eu, detr periculis ex, nihil expetendis in mei.
                Mei an pericula euripidis.hinc partem ei est. Eos ei nisl
                graecis, vix aperiri consequat an. Eius lorem tincidunt vix at,
                vel pertinax sensibus id, error epicurei mea. Mea facilisis
                urbanitas. »
              </h4>
              <div className="Slide--Paragraph__author">
                <span>Elsa Schmidt </span>
                <span>Cosmetics </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="Slide--Paragraph__content">
              <h4>
                « Torquatos nec eu, detr periculis ex, nihil expetendis in mei.
                Mei an pericula euripidis.hinc partem ei est. Eos ei nisl
                graecis, vix aperiri consequat an. Eius lorem tincidunt vix at,
                vel pertinax sensibus id, error epicurei mea. Mea facilisis
                urbanitas. »
              </h4>
              <div className="Slide--Paragraph__author">
                <span>John Baldesari </span>
                <span>Cosmetics </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Slide--button">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="lnr lnr-arrow-left " aria-hidden="true" />
          </button>
          <button
            className=" carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="lnr lnr-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideParagraph;
