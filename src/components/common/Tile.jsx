import {Col} from "react-bootstrap";

const Tile = ({
                icon,
                title,
                content
              }) => {
  return (
    <Col xs={5} sm={5} md={8} lg={5} className="tile small-tile p-3 p-md-4 m-0 justify-content-start align-items-start">
      <div className="tile-icon mb-2 pt-3">{icon}</div>
      <h5 className="title my-1">
        {title}
      </h5>
      <p className="content my-1 my-md-2">
        {content}
      </p>
    </Col>
  );
}

export default Tile;
