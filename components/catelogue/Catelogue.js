import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { IoEye } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";

const Catelogue = () => {


  return (
    <>
      <section className="catalogue_bg">
        <div className="catelogue_banner">
          <img src="./catalogue.jpg" alt="" className="catelogue_img" />
        </div>
        <Container>
          <div className="py-5">
            <Row>
              <Col lg={3}>
                <div className="bg-white px-0 border shadow rounded">
                  <div className="content">
                    {/* <Link
                      href="https://unsplash.com/photos/HkTMcmlMOUQ"
                      target="_blank"
                    > */}
                    <div className="content-overlay"></div>
                    <img
                      className="content-image"
                      src="https://source.unsplash.com/HkTMcmlMOUQ"
                      alt=""
                    />
                    <div className="d-flex justify-content-center content-details fadeIn-bottom">
                      {/* <button
                        onClick={() => onButtonClick()}
                        className="content-icon text-white border p-3 me-2"
                      >
                        <FaDownload className="font-20" />
                      </button> */}
                      {/* <div > */}
                        <Link className="content-icon text-white border p-3 ms-2" href="/pdf/application_doc.pdf" target="_blank">
                          
                          <IoEye className="font-24" />
                        </Link>
                      {/* </div> */}
                    </div>
                    {/* </Link> */}
                  </div>

                  <div className="">
                    <p className="py-3 ps-3">adgasdgas</p>
                  </div>

                  <h1></h1>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Catelogue;
