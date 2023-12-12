import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "../../utils/axios";
import { IoEye } from "react-icons/io5";
import { getStoragePath } from "../../utils/helpers"; 
import PDFPage from "./Pdf";


const Catelogue = () => {
  const [catData, setCatdata] = useState([]);

  const fetchCatelogue = () => {
    axios.get(`/content-module/29`).then((res) => {
      setCatdata(res?.data[0]?.content_item);
    });
  };
  useEffect(() => {
    fetchCatelogue();
  }, []);


  return (
    <>
      <section className="catalogue_bg">
        <div className="catelogue_banner">
          <img src="./catalogue.jpg" alt="" className="catelogue_img" />
        </div>
        <Container>
          <div className="py-5">
            <Row>
              {catData?.map((catalogue) => {
                return (
                  <>
                    <Col lg={3}>
                      <div className="bg-white px-0 border shadow rounded">
                        <div className="content">
                          <div className="content-overlay"></div>
                          <img
                            className="content-image"
                            src={getStoragePath(catalogue?.item_image)}
                            alt=""
                          />
                          <div className="d-flex justify-content-center content-details fadeIn-bottom">
                            <Link
                              className="content-icon text-white border p-3 ms-2"
                              href={getStoragePath(
                                catalogue?.catalogue_brochure
                              )}
                              target="_blank"
                            >
                              <IoEye className="font-24" />
                            </Link>
                          </div>
                        </div>

                        <div className="">
                          <p className="py-3 ps-3">
                            {catalogue?.item_short_desc}
                          </p>
                        </div>

                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </Container>
        <PDFPage/>
      </section>
    </>
  );
};

export default Catelogue;
