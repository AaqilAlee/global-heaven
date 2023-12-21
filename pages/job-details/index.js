import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const index = () => {
  return (
    <>
      <section>
        <div className="career_banner position-relative">
          <img
            src="/job_details.png"
            alt="career img"
            className="career_banner_img"
          />
        </div>
        <Container>
          <Row>
            <Col lg={8} className="px-5">
              <div className="job_description my-3 rounded-2 p-5">
                <div>
                  <h1 className="job-title pb-2">
                    Design Manager, Technology Recruitment Notice (December
                    2023)
                  </h1>
                  <p className="font-16">
                    ***We strongly encourage you to read the whole circular
                    prior to applying***
                  </p>
                  <p className="font-16 pt-3"> Company: Global Heaven</p>
                  <p className="font-16"> Position: Design Manager</p>
                  <p className="font-16"> Vacancy: 01</p>
                  <p className="font-16"> Job Nature: Full Time</p>
                  <p className="font-16">
                    Office Hours: 9:00 AM – 6:00 PM (Flexible)
                  </p>
                  <p className="font-16"> Job Nature: Full Time</p>
                  <p className="font-16"> Weekend: Saturday, Sunday</p>
                </div>
                {/* Compensation & Benefits: */}
                <div>
                  <h1 className="job-title pt-3 pb-2 text-capitalize">
                    Compensation & Benefits:
                  </h1>
                  <p className="font-16"> Salary Range: BDT 100,000</p>
                  <p className="font-16">
                    Bi-Annual Salary Increment (Eligibility Conditions Applies)
                  </p>
                  <p className="font-16">
                    Bi-Annual Performance Bonus (Up to 10 Basics in a Year)
                  </p>
                  <p className="font-16">
                    2 Times Yearly Festival Bonus (Eligibility Conditions
                    Applies)
                  </p>
                </div>
                {/* company overview */}
                <div>
                  <h1 className="job-title pt-3 pb-2 text-capitalize">
                    company overview :
                  </h1>
                  <p className="font-16"> Salary Range: BDT 100,000</p>
                  <p className="font-16">
                    Bi-Annual Salary Increment (Eligibility Conditions Applies)
                  </p>
                  <p className="font-16">
                    Bi-Annual Performance Bonus (Up to 10 Basics in a Year)
                  </p>
                  <p className="font-16">
                    2 Times Yearly Festival Bonus (Eligibility Conditions
                    Applies)
                  </p>
                </div>
                {/* responsibilities */}
                <div>
                  <h1 className="job-title pt-3 pb-2 text-capitalize">
                    responsibilities :
                  </h1>
                  <p className="font-16">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
                {/* experience */}
                <div>
                  <h1 className="job-title pt-3 pb-2 text-capitalize">
                    experience :
                  </h1>
                  <p className="font-16">
                    5+ years of experience in the relevant field
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="pe-5">
              <div className="job_summery my-3 rounded-2 p-4">
                <div className="job_summery_title my-3 text-capitalize font">
                  job summery
                </div>
                <div className="d-flex align-items-center">
                  <div className="icon">
                    <div></div>
                  </div>
                  <div>text</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
