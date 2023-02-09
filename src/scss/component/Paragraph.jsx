import "./Paragraph.scss";
function Paragraph(props) {
  return (
    <div className="paragraph--text">
      <div className="paragraph--wrap">
        <div className="paragraph--image">
          <img
            src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/section-title-icon-1.png"
            alt=""
          />
        </div>
        <div className="paragraph--wrap__content ">
          <h2>{props.title}</h2>
          <h6>
            Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
            expetendis in mei. Mei an pericula.
          </h6>
        </div>
        <div className="paragraph--divier">
          <span className="paragraph--divider__separator" />
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
