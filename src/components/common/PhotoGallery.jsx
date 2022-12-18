import {Col, Row} from "react-bootstrap";
import React from "react";

const PhotoGallery = () => {
  return (
    <Row className="photo-row flex-wrap py-4 px-2 px-md-0">
      <Col xs={4} className="px-0">
        <div className="window" id="photo-1">
          <img src="https://www.dfwurbanrealty.com/uploads/bigstock-external-view-of-a-contemporar-61564541_650.jpg"
               alt=""/>
        </div>
        <div className="window" id="photo-2">
          <img
            src="https://img.freepik.com/premium-photo/interior-exterior-design-pool-villa-which-features-living-area_41487-217.jpg?w=2000"
            alt=""/>
        </div>
      </Col>
      <Col xs={4} className="px-0">
        <div className="window" id="photo-3">
          <img src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=2000"
               alt=""/>
        </div>
        <div className="window" id="photo-4">
          <img
            src="https://img.freepik.com/premium-photo/3d-rendering-upscale-modern-mansion-with-pool_190619-546.jpg?w=2000"
            alt=""/>
        </div>
      </Col>
      <Col xs={4} className="px-0">
        <div className="window" id="photo-5">
          <img src="https://img.freepik.com/premium-photo/3d-rendering-modern-house_62754-1884.jpg?w=2000"
               alt=""/>
        </div>
        <div className="window" id="photo-6">
          <img
            src="https://img.freepik.com/premium-photo/3d-rendering-luxury-modern-building-village-night_105762-1209.jpg?w=2000"
            alt=""/>
        </div>
      </Col>
    </Row>
  );
}

export default PhotoGallery;
