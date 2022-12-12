import {Card, Col} from "react-bootstrap";
import React from "react";

const ServiceCard = ({cardTitle, cardText, cardImageUrl, listItems}) => {
  return (
    <Col sm={12} md={6} lg={4} className="my-5">
      {/*<div className="v-line-wrapper v-line-left justify-content-end position-absolute">*/}
      {/*  <div className="v-line"/>*/}
      {/*</div>*/}
      <Card className="service-card">
        <div className="window pb-1">
          <Card.Img variant="top"
                    width="100%"
                    height="100%"
                    src={cardImageUrl}/>
        </div>
        <Card.Body bsPrefix="px-4 pt-3 pb-2 m-0">
          <Card.Title as="h2" bsPrefix="px-1 title py-1">{cardTitle}</Card.Title>
          <Card.Text bsPrefix="px-1 text py-1">
            {cardText}
            <ol className="ps-3 pt-3 pb-0 mt-1 mb-0">
              {
                listItems.map((item) => <li>{item}</li>)
              }
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
      {/*<div className="v-line-wrapper v-line-right justify-content-end position-absolute">*/}
      {/*  <div className="v-line"/>*/}
      {/*</div>*/}
    </Col>
  );
}

export default ServiceCard;
