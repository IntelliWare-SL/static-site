import {Col} from "react-bootstrap";

const LargeTile = ({
                     icon,
                     title,
                     content = "Erat diam hendrerit integer elit nulla mauris ultrices tellus eget fringilla nec in purus vel nisi",
                   }) => {
  return (
    <Col xs={6} md={6} lg={4} className="p-2">
      <div className="tile large-tile tile-shadow p-3 p-md-4 p-md-3 p-md-5 mb-2 h-100">
        <div className="tile-icon mb-3">{icon}</div>
        <h4 className="my-1">
          {title}
        </h4>
        <p className="my-2">
          {content}
        </p>
        <a href="src/components#" className="text-primary mt-3 fw-bold">Read More</a>
      </div>
    </Col>
  );
}

export default LargeTile;
