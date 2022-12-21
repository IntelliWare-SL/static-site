import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {MultiSelect} from "primereact/multiselect";

const ScheduleAMeetingSection = () => {
  const timeZoneFieldOptions = [{label: "[GMT] Greenwich Mean Time", value: "GMT"},
    {label: "[UTC] Coordinated Universal Time", value: "UTC"},
    {label: "[EST] Eastern Standard Time", value: "EST"},
    {label: "[CST] Central Standard Time", value: "CST"},
    {label: "[MST] Mountain Standard Time", value: "MST"},
    {label: "[PST] Pacific Standard Time", value: "PST"},
    {label: "[AKST] Alaska Standard Time", value: "AKST"},
    {label: "[HST] Hawaii Standard Time", value: "HST"},
    {label: "[AST] Atlantic Standard Time", value: "AST"}];

  const timeSlots = ["07.20 AM", "08.40 AM", "09.00 PM", "10.06 AM", "09.00 AM", "10.06 PM"];

  const [formData, setFormData] = useState({
    timeZone: "", timeSlot: null,
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (<section className="schedule-meeting-section pt-0 px-4 px-lg-5 pb-4 pb-lg-5">
    <Container className="pt-2 pb-4 px-0 mx-0">
      <Row sm={12}
           className="justify-content-center text-center pt-0 pt-md-4 pb-3 align-items-center flex-column-reverse flex-lg-row px-0 mx-0">
        <Col sm={12} lg={6} className="px-0 pe-md-5 mb-0">
          <div className="meeting-form-card p-4 p-md-5 text-start">
            <div className="form p-4 pb-2">
              <h3 className="form-title mb-2 mb-lg-4">Best time for work?</h3>
              <Form.Group className="mb-3">
                <MultiSelect showSelectAll={false} filter={false} placeholder={"[GMT] Greenwich Mean Time"}
                             name="timeZone" value={formData.timeZone}
                             selectionLimit={1}
                             scrollHeight={"300px"} options={timeZoneFieldOptions}
                             onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row xs={12} className="pt-2 pt-lg-4 pb-2">
                  {
                    timeSlots.map((timeSlot) =>
                      <Col xs={6} className="mb-1 mb-md-2 px-2 px-md-3 py-2">
                        <label className="w-100">
                          <input type="radio" name="timeSlot" className="card-input-element"/>
                          <div className="card-input p-4 text-center">
                            {timeSlot}
                          </div>
                        </label>
                      </Col>
                    )
                  }
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <h5 className="mb-4">Duration for Meeting</h5>
                <Button disabled className="text-white mt-2 mb-3 d-block custom-btn w-100 greyed">40 Min</Button>
                <Button className="mt-2 d-block custom-btn w-100">Book Now</Button>
              </Form.Group>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={6} className="px-0 ps-md-5 text-start mt-0 mb-4 mb-lg-0 px-4 px-md-0">
          <h2 className="section-title mb-4">Schedule A Meeting</h2>
          <p className="section-subtitle mb-3 pt-2 pb-4">
            At Reamer Made, we understand that construction can be a tough business - but it doesn't have to be. We
            are dedicated to helping you tell your story and branding yourself in the industry.
          </p>
          <div className="mt-3">
            <h3>Meet with Reamer Made</h3>
            <p className="py-2 section-subtitle">
              Select the date and time that works best for you to schedule a meeting
              directly with our Marketing Manager, Callie.
            </p>
            <ul>
              <li>Many desktop publishing packages and web page</li>
              <li>It is a long establishing fact</li>
              <li>The point of using</li>
              <li>It is a long establishing fact that a reader will be</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>);
}

export default ScheduleAMeetingSection;
