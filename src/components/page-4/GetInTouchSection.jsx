import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';
import {InputTextarea} from "primereact/inputtextarea";
import CustomButton from "../common/CustomButton";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    servicesRequested: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    jobTitle: "",
    companyName: "",
    companySize: "",
    referral: "",
    message: "",
  });

  const servicesFieldOptions = ['Media', 'Web Development', 'Digital Marketing', 'Branding & Creative', 'Other'];
  const companySizeFieldOptions = ['0-29', '30-59', '60-149', '150-249', '250+'];
  const referralFieldOptions = ['Social media', 'Email or newsletter', 'Search engine', 'Word of mouth', 'In-person events', 'Other'];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (<section className="get-in-touch-section pt-1 px-1 px-md-3 px-lg-5 pb-3">
    <Container className="py-0 px-5">
      <Row sm={12} className="justify-content-center text-center pt-4 pb-4">
        <Col sm={12}>
          <h2 className="section-title mb-3 mb-md-4 mt-2">Get in touch</h2>
        </Col>
      </Row>
      <Row sm={12} className="card-wrapper py-3 my-md-3 justify-content-center gap-5">
        <Col sm={12} md={10}>
          <Form>
            <Row className="mb-2">
              <Col sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>What Can We Help You With?</Form.Label>
                  <MultiSelect showSelectAll={true} filter={false} placeholder={"Choose services..."}
                               name="servicesRequested" value={formData.servicesRequested}
                               scrollHeight={"300px"} options={servicesFieldOptions}
                               onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <InputText name="firstName" value={formData.firstName} onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <InputText name="lastName" value={formData.lastName} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputText name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <InputText name="phoneNumber" type="text" value={formData.phoneNumber} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <InputText name="jobTitle" type="text" value={formData.jobTitle} onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <InputText name="companyName" type="text" value={formData.companyName} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Size</Form.Label>
                  <MultiSelect showSelectAll={false} filter={false} placeholder={"Choose company size"}
                               name="companySize" value={formData.companySize}
                               selectionLimit={1}
                               scrollHeight={"300px"} options={companySizeFieldOptions}
                               onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>How Did You Hear About Reamer Made?</Form.Label>
                  <MultiSelect showSelectAll={true} filter={false} placeholder={"Choose option..."}
                               name="referral" value={formData.referral}
                               scrollHeight={"300px"} options={referralFieldOptions}
                               maxSelectedLabels={3}
                               onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3 mb-2">
              <Col sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Tell Us About Your Project?</Form.Label>
                  <InputTextarea rows={5} cols={30} value={formData.message} onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center mb-2">
              <Col sm={12} md={6} className="py-0 py-md-3">
                <CustomButton text={"Submit"} showIcon={false}
                              customClasses={"my-2 my-md-4 w-100 d-block text-center"}/>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>);
}

export default GetInTouchSection;
