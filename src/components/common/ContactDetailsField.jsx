import {Col, Row} from "react-bootstrap";

const ContactDetailsField = ({type, icon, line1, line2}) => {
  const renderLines = (type, line1, line2) => {
    switch (type) {
      case "email":
        return (
          <>
            <a href={`mailto: ${line1}`}>{line1}</a>
            <br/>
            <a href={`mailto: ${line1}`}>{line1}</a>
          </>
        );

      case "phone":
        return (
          <>
            <a href={`tel: ${line1}`}>{line1}</a>
            <br/>
            <a href={`tel: ${line1}`}>{line1}</a>
          </>
        );

      default:
        return (
          <>
            <span>{line1}</span>
            <br/>
            <span>{line2}</span>
          </>
        );
    }
  }


  return (
    <Row sm={12} className="contact-details-field justify-content-start align-items-center mb-4">
      <Col sm={2} className="px-0 text-center">
        <div className="contact-icon-wrapper h-100 w-100">
          {icon}
        </div>
      </Col>
      <Col sm={10}>
        <div className="contact-details-wrapper p-0 ps-1 text-start">
          {renderLines(type, line1, line2)}
        </div>
      </Col>
    </Row>
  );
}

export default ContactDetailsField;
