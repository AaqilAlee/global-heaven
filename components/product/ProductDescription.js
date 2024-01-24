import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { Fragment, useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import {
  hasInventoryReviewAbility,
  saveReview,
} from "../../services/ReviewServices";
import { getStoragePath, tostify } from "../../utils/helpers";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";

const ProductDescription = ({ inventory }) => {
  const [key, setKey] = useState("home");
  const [reviewAbility, setReviewAbility] = useState(false);

  const [formData, setFormData] = useState({
    ratting_number: "",
    comments: "",
  });
  const hasInventoryReviewAbilityStatus = (inventoryId) => {
    hasInventoryReviewAbility(inventoryId).then((response) => {
      if (response?.data) {
        setReviewAbility(response.data.capability);
      }
    });
  };

  useEffect(() => {
    if (inventory?.id) {
      hasInventoryReviewAbilityStatus(inventory.id);
    }
  }, [inventory?.id]);

  const handleChange = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeRating = (value) => {
    setFormData({
      ...formData,
      ratting_number: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData?.ratting_number /*|| !formData?.comments*/) {
      tostify(toast, "warning", {
        message: "Invalid review data!",
      });
      return false;
    }

    saveReview({
      ratting_number: formData?.ratting_number,
      // comments: formData?.comments,
      inventory_id: inventory?.id,
    }).then((response) => {
      tostify(toast, "success", response);
      hasInventoryReviewAbilityStatus(inventory.id);
    });
  };

  const getVideoPath = (videoPath) => {
    // Base storage path
    const baseStoragePath = "https://cms.mbinternationalbd.com/storage/";

    // Check if the video path already contains '/product-video/'
    if (videoPath && videoPath.includes("/product-video/")) {
      return videoPath; // Video path is already complete
    } else {
      // Concatenate the missing part to the base storage path
      return baseStoragePath + "product-video/" + (videoPath || "");
    }
  };
  return (
    inventory?.id && (
      <Fragment>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 border-0"
        >
          <Tab
            eventKey="home"
            title="Product Description"
            className="rounded-0"
          >
            <Row>
              {inventory?.product?.product_video_path ? (
                <>
                  <Col lg={6}>
                    <h2 className="font-24 fw-semibold pb-2">
                      Product Description
                    </h2>

                    <p className="font-16 font-lato border-top pt-2 border-danger text-justify">
                      {inventory?.product?.product_short_desc}
                    </p>
                  </Col>
                  <Col lg={6} className="p-3">
                    <video width="100%" height="240" controls>
                      <source
                        src={getVideoPath(
                          inventory?.product?.product_video_path || ""
                        )}
                        type="video/mp4"
                      />
                    </video>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg={12}>
                    {/* <h2 className="font-24 fw-semibold pb-2">
                  Product Description
                </h2> */}

                    <p className="font-16 font-lato border-top pt-2 border-danger text-justify">
                      {inventory?.product?.product_short_desc}
                    </p>
                  </Col>
                </>
              )}
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Secification" className="rounded-0">
            <Col lg={6}>
                <div>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Spacifications</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>MB Commercial Burner</td>
                      </tr>
                      <tr>
                        <td>Brand</td>
                        <td>MB International</td>
                      </tr>
                      <tr>
                        <td>Model</td>
                        <td>C-29/ C-30</td>
                      </tr>
                      <tr>
                        <td>Panel</td>
                        <td>Cast Iron Panel</td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>Stainless Steel Cover</td>
                      </tr>
                      <tr>
                        <td>Flow Rated</td>
                        <td>Thermal Flow (KW)-6</td>
                      </tr>
                      <tr>
                        <td>Flame type</td>
                        <td>Tornado Blue flame</td>
                      </tr>
                      <tr>
                        <td>Ignite</td>
                        <td>Auto Ignition 50,000 times</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>560mmX340mmx135mm</td>
                      </tr>
                      <tr>
                        <td>Burner</td>
                        <td>One 220mm Burner</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>Mixed (As given picture).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </Col>
          </Tab>
        </Tabs>
      </Fragment>
    )
  );
};

export default ProductDescription;
