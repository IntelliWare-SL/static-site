import {Button, Col, Container, Row} from "react-bootstrap";
import brandLogoLong from "../../assets/images/brand-logo-long.png";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactDetailsField from "./ContactDetailsField";

const Footer = () => {
  return (
    <footer className="mt-0 pt-4">
      <Container className="my-4 py-5">
        <Row sm={12} className="justify-content-between pb-2">
          <Col sm={12} md={4} className="footer-section section-border ps-0">
            <div className="brand-section-wrapper">
              <div className="brand-logo pt-2 pb-3">
                <img src={brandLogoLong} alt="Reamer Made logo" width="100%"/>
              </div>
              <div className="brand-tagline py-2">
                <p>We are dedicated to helping you tell your story and branding yourself in the industry. </p>
              </div>
              <SocialMediaIcons/>
            </div>
          </Col>
          <Col sm={12} md={4} className="footer-section section-border">
            <div className="brand-section-wrapper">
              <div className="section-2-title text-white py-2">
                <h5>Do you want to receive
                  a detailed job quote?
                  <br/>
                  <span>Use our online form.</span></h5>
              </div>
              <div className="section-2-text py-2 w-75">
                <p>We respond to inquiries
                  within 48 hours</p>
              </div>
              <Button variant="primary" className="my-2">Send Inquiry</Button>
            </div>
          </Col>
          <Col sm={12} md={4} className="footer-section">
            <div className="brand-section-wrapper">
              <div className="brand-logo pt-2 pb-3">
                <h3>Contact Us</h3>
              </div>
              <ContactDetailsField icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.3467 17.6136L19.9975 14.2643C18.8013 13.0681 16.7678 13.5467 16.2893 15.1016C15.9305 16.1782 14.7343 16.7763 13.6578 16.537C11.2654 15.9389 8.03578 12.8289 7.43769 10.317C7.07884 9.24036 7.79654 8.04419 8.87309 7.68538C10.4281 7.20691 10.9066 5.17343 9.71041 3.97726L6.36114 0.627989C5.4042 -0.209329 3.9688 -0.209329 3.13148 0.627989L0.858765 2.90071C-1.41396 5.29305 1.098 11.6327 6.71999 17.2547C12.342 22.8767 18.6817 25.5083 21.074 23.116L23.3467 20.8432C24.1841 19.8863 24.1841 18.4509 23.3467 17.6136Z"
                    fill="#ED882D"/>
                </svg>
              } line1="+1-8058476323" line2="+1-8795847362"/>
              <ContactDetailsField icon={
                <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8228 5.65007C19.0413 4.10936 17.8851 2.78982 16.4604 1.81275C15.0357 0.835683 13.3883 0.232451 11.6695 0.0585095C10.892 -0.0195032 10.1086 -0.0195032 9.33106 0.0585095C7.61232 0.232565 5.96489 0.83578 4.54013 1.81273C3.11537 2.78968 1.95899 4.10903 1.17724 5.64956C0.19367 7.61518 -0.186241 9.8279 0.0853539 12.009C0.356949 14.1901 1.2679 16.2421 2.70348 17.9065L9.70391 26.4176C9.80059 26.5352 9.92212 26.63 10.0598 26.695C10.1974 26.76 10.3478 26.7938 10.5 26.7938C10.6523 26.7938 10.8026 26.76 10.9403 26.695C11.0779 26.63 11.1994 26.5352 11.2961 26.4176L18.2965 17.9065C19.7321 16.2422 20.643 14.1903 20.9146 12.0093C21.1862 9.82825 20.8063 7.61561 19.8228 5.65007ZM10.5 14.4269C9.68472 14.4269 8.88773 14.1851 8.20984 13.7321C7.53195 13.2792 7.00359 12.6354 6.69159 11.8822C6.37959 11.1289 6.29796 10.3001 6.45702 9.50046C6.61607 8.70083 7.00867 7.96632 7.58517 7.38982C8.16167 6.81332 8.89618 6.42072 9.69581 6.26166C10.4954 6.10261 11.3243 6.18424 12.0775 6.49624C12.8307 6.80824 13.4745 7.33659 13.9275 8.01449C14.3805 8.69238 14.6222 9.48936 14.6222 10.3047C14.6209 11.3975 14.1862 12.4453 13.4134 13.2181C12.6406 13.9909 11.5929 14.4256 10.5 14.4269V14.4269Z"
                    fill="#ED882D"/>
                </svg>
              } line1="100 Orchard St," line2="New York, NY 10002, USA"/>
              <ContactDetailsField icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 24C18.6257 24 24 18.6257 24 12C24 5.37427 18.6257 0 12 0C5.37427 0 0 5.37427 0 12C0 18.6257 5.37427 24 12 24ZM11.1428 5.14287C11.1428 4.67142 11.5286 4.2857 12 4.2857C12.4714 4.2857 12.8572 4.67142 12.8572 5.14287V11.5886L16.8215 14.76C17.19 15.0557 17.25 15.5957 16.9543 15.9643C16.7871 16.1743 16.5386 16.2857 16.2857 16.2857C16.0971 16.2857 15.9085 16.2257 15.75 16.0971L11.4643 12.6686C11.2629 12.5057 11.1429 12.2615 11.1429 12V5.14287H11.1428Z"
                    fill="#ED882D"/>
                </svg>
              } line1="Monday - Friday," line2="09.00 AM - 06.00 PM"/>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="m-0 p-4 copyright-bar text-center">
        <p className="p-1 m-0 text-white">Copyright © 2022 All Rights </p>
      </div>
    </footer>
  );
}

export default Footer;
