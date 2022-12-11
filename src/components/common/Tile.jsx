import {Col} from "react-bootstrap";

const Tile = ({
                icon,
                title,
                content = "Erat diam hendrerit integer elit nulla mauris ultrices tellus eget fringilla nec in purus vel nisi"
              }) => {
  return (
    <Col sm={4} className="tile small-tile p-4">
      <div className="tile-icon mb-3 pt-2">{icon}</div>
      <h5 className="my-1">
        {title}
      </h5>
      <p className="my-2">
        {content}
      </p>
    </Col>
  );
}

export default Tile;
