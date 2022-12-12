import {Button, Col, Row} from "react-bootstrap";

const BannerOverImage = ({
                           bannerTitle,
                           bannerContent,
                           buttonText,
                           buttonLink,
                           imageUrl,
                           altText = "",
                           alignBannerRight
                         }) => {
  return (
    <Row className="banner-over-image align-items-center justify-content-between">
      <Col sm={12} className="image p-0">
        <img src={imageUrl} height="100%"
             className={!alignBannerRight ? "float-end" : "float-start"}
             alt={altText}/>
      </Col>
      <Col sm={12} className="px-0 text-white banner-wrapper">
        <div className={alignBannerRight ? "banner float-end" : "banner float-start"}>
          <div className="banner-content">
            <h1 className="section-title pb-2">{bannerTitle}</h1>
            <p className="section-subtitle my-4">{bannerContent}</p>
            <Button variant="primary" className="my-3">{buttonText}</Button>
          </div>
          <div className={alignBannerRight ? "h-line float-end" : "h-line float-start"}></div>
        </div>
      </Col>
    </Row>
  );
}

export default BannerOverImage;
