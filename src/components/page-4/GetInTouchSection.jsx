import React from "react";
import {Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';
import {Field, Formik} from "formik";
import {InputTextarea} from "primereact/inputtextarea";
import swalWithBootstrapButtons from 'sweetalert2'


const GetInTouchSection = () => {
  const [isFormLoading, setIsFormLoading] = React.useState(false);
  const dropdownFieldOptions = {
    "servicesRequested": ['Media', 'Web Development', 'Digital Marketing', 'Branding & Creative', 'Other'],
    "companySize": ['0-29', '30-59', '60-149', '150-249', '250+'],
    "referral": ['Social media', 'Email or newsletter', 'Search engine', 'Word of mouth', 'In-person events', 'Other']
  }

  const handleOnSubmit = (values, actions) => {
    try {
      setIsFormLoading(true);
      const data = {
        "from": "Reamer Made Website",
        "to": "contact@reamermade.com",
        "subject": "Get in touch Form",
        "html": `<strong>What can we help you with? </strong>${values.servicesRequested}<br/>
                    <strong>Name: </strong>${values.firstName} ${values.lastName}<br>
                  <strong>Email address: </strong>${values.emailAddress}<br>
                  <strong>Phone Number: </strong>${values.phoneNumber}<br>
                  <strong>Phone Number: </strong>${values.jobTitle}<br>
                  <strong>Company Name: </strong>${values.companyName}<br>
                  <strong>Company Size: </strong>${values.companySize}<br>
                  <strong>Referral: </strong>${values.referral}<br>
                  <strong>Message: </strong>${values.message}<br>`
      };

      const bearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZmlyc3RfbmFtZSI6IlRlc3QgMSIsImxhc3RfbmFtZSI6IlRlc3QgMiIsIm5pYyI6Ijk4MTIzNDU5MVYiLCJtb2JpbGVfbm8iOiIwMTEyMzQ1Njc4IiwiZW1haWwiOiJhYmNkQGdtYWwuY29tIiwidXNlcl90eXBlIjoiY3VzdG9tZXIiLCJuZWFyZXN0X2NpdHkiOiJDb2xvbWJvIiwiZGlzdHJpY3QiOiJCYWR1bGxhIiwiaXNfZGVsZXRlZCI6MCwicHJvdmluY2UiOiJVdmEiLCJpZCI6MH0sImlhdCI6MTY2OTg0NjU2OCwiZXhwIjoxNjY5OTMyOTY4fQ.PMm1gH-q-5vxRFNiG_qJJkG5uE2C4YumO7D2M6GkzMM";
      fetch('http://spot-ivy-revolve.glitch.me/api/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': bearerToken
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsFormLoading(false);
          console.log('Success:', data);
          actions.resetForm();
          actions.resetForm('');
          swalWithBootstrapButtons.fire(
            'Success!',
            'Your message has been sent',
            'success'
          );

        })
        .catch((error) => {
          setIsFormLoading(false);
          console.error('Error:', error);
        });
    } catch (e) {
      swalWithBootstrapButtons.fire(
        'Error',
        'Something went wrong, please try again',
        'error'
      );
      console.log(e);
    } finally {
      actions.setSubmitting(false);
    }
  }


  const validate = (values) => {
    const errors = {};

    if (!values.servicesRequested || values.servicesRequested.length === 0) {
      errors.servicesRequested = 'Please select at least one service';
    }

    if (!values.firstName) {
      errors.firstName = 'Please enter your first name';
    }

    if (!values.lastName) {
      errors.lastName = 'Please enter your last name';
    }

    if (!values.emailAddress) {
      errors.emailAddress = 'Please enter your email address';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.emailAddress
      )
    ) {
      errors.emailAddress = 'Invalid email address';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Please enter your phone number';

    } else if (
      !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4,})[-. ]?([0-9]{4,})$/i.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = 'Invalid phone number';
    }

    if (!values.jobTitle) {
      errors.jobTitle = 'Please enter your job title';
    }

    if (!values.companyName) {
      errors.companyName = 'Please enter your company name';
    }

    if (!values.companySize || values.companySize.length === 0) {
      errors.companySize = 'Please select your company size';
    }

    if (!values.referral || values.referral.length === 0) {
      errors.referral = 'Please select an option';
    }

    if (!values.message) {
      errors.message = 'Please enter a message';
    }

    return errors;
  };

  const TextInput = ({
                       field,
                       form: {touched, errors},
                       meta,
                     }) => <>
    <InputText {...field} className={meta.touched && meta.error && "error-input"}/>
    {meta.touched && meta.error && (
      <div className="error pt-2 error-label">{meta.error}</div>
    )}
  </>

  const MultiSelectInput = ({
                              field,
                              form: {touched, errors},
                              meta,
                            }) =>
    <>
      <MultiSelect options={dropdownFieldOptions[field.name]} showSelectAll={true} filter={false}
                   scrollHeight={"300px"} placeholder=" " maxSelectedLabels={3} {...field}
                   className={meta.touched && meta.error && "error-input"}/>
      {meta.touched && meta.error && (
        <div className="error pt-2 error-label">{meta.error}</div>
      )}
    </>;

  const SingleSelectInput = ({
                               field,
                               form: {touched, errors},
                               meta,
                             }) =>
    <>
      <MultiSelect options={dropdownFieldOptions[field.name]} showSelectAll={false} filter={false}
                   selectionLimit={1} scrollHeight={"300px"} placeholder=" " {...field}
                   className={meta.touched && meta.error && "error-input"}/>
      {meta.touched && meta.error && (
        <div className="error pt-2 error-label">{meta.error}</div>
      )}
    </>;

  const TextAreaInput = ({
                           field,
                           form: {touched, errors},
                           meta,
                         }) =>
    <>
      <InputTextarea rows={5} cols={30} {...field} className={meta.touched && meta.error && "error-input"}/>
      {meta.touched && meta.error && (
        <div className="error pt-2 error-label">{meta.error}</div>
      )}
    </>;

  return (<section className="get-in-touch-section pt-1 px-1 px-md-3 px-lg-5 pb-3">
    <Container className="py-0 px-5">
      <Row sm={12} className="justify-content-center text-center pt-4 pb-4">
        <Col sm={12}>
          <h2 className="section-title mb-2 mt-2">Get in touch</h2>
        </Col>
      </Row>
      <Row sm={12} className="card-wrapper py-3 my-md-3 justify-content-center gap-5">
        <Col sm={12} md={10}>
          <Formik
            validate={validate}
            onSubmit={handleOnSubmit}
            initialValues={{
              servicesRequested: [],
              firstName: '',
              lastName: '',
              emailAddress: '',
              phoneNumber: '',
              jobTitle: '',
              companyName: '',
              companySize: [],
              referral: [],
              message: '',
            }}>
            {({errors, touched, handleSubmit}) => (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-2">
                  <Col sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>What Can We Help You With?</Form.Label>
                      <Field name="servicesRequested">
                        {MultiSelectInput}
                      </Field>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Field name="firstName">
                        {TextInput}
                      </Field>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Field name="lastName">
                        {TextInput}
                      </Field>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Field name="emailAddress" type="email">
                        {TextInput}
                      </Field>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Field name="phoneNumber" type="phone">
                        {TextInput}
                      </Field>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Job Title</Form.Label>
                      <Field name="jobTitle">
                        {TextInput}
                      </Field>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name</Form.Label>
                      <Field name="companyName">
                        {TextInput}
                      </Field> </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Size</Form.Label>
                      <Field name="companySize" as="select">
                        {SingleSelectInput}
                      </Field>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>How Did You Hear About Reamer Made?</Form.Label>
                      <Field name="referral" as="select">
                        {MultiSelectInput}
                      </Field>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-3 mb-2">
                  <Col sm={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tell Us About Your Project?</Form.Label>
                      <Field name="message" as="textarea">
                        {TextAreaInput}
                      </Field> </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center mb-2">
                  <Col sm={12} md={6} className="py-0 py-md-3">
                    <button type="submit"
                            className={"custom-btn my-2 my-md-4 w-100 d-block text-center" + (isFormLoading && " disabled-btn")}>{
                      isFormLoading ? <span><Spinner animation="border" variant="light" size="sm" className="me-3"/>Loading</span> : "Submit"
                    }</button>
                  </Col>
                </Row>

              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  </section>);
}

export default GetInTouchSection;
