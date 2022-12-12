import {Col, Row} from "react-bootstrap";

const ContactDetailsField = ({icon, line1, line2}) => {
  return (
    <Row sm={12} className="justify-content-start align-items-center mb-3">
      <Col sm={2} className="px-0 text-center">
        <div className="contact-icon-wrapper">
          {icon}
        </div>
      </Col>
      <Col sm={10}>
        <div className="contact-details-wrapper p-0">
          <span>{line1}</span>
          <br/>
          <span>{line2}</span>
        </div>
      </Col>
    </Row>
  );
}

export default ContactDetailsField;
