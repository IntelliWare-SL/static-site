import {Col} from "react-bootstrap";

const LargeTile = ({
                     icon,
                     title,
                     content = "Erat diam hendrerit integer elit nulla mauris ultrices tellus eget fringilla nec in purus vel nisi",
                   }) => {
  return (
    <Col sm={4} className="tile large-tile tile-shadow p-5 mb-3">
      <div className="tile-icon mb-3">{icon}</div>
      <h4 className="my-1">
        {title}
      </h4>
      <p className="my-2">
        {content}
      </p>
      <a href="src/components#" className="text-primary mt-3 fw-bold">Read More</a>
    </Col>
  );
}

export default LargeTile;
