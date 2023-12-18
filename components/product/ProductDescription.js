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
console.log(reviewAbility)
  const hasInventoryReviewAbilityStatus = (inventoryId) => {
    hasInventoryReviewAbility(inventoryId).then((response) => {
      if (response?.data) {
        setReviewAbility(response.data.capability);
      }
    });
  };
// console.log(reviewAbility?.product)
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

  return (
    inventory?.id && (
      <Fragment>
        <Row>
          <Col lg={6}>
            <h2 className="font-24 fw-semibold pb-2">Product Description</h2>
            {/* <Tabs id="controlled" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 border-0">
				<Tab eventKey="home" title="Description" className="pb-5 ps-0 border-0 font-lato"> */}
            <p className="font-16 font-lato border-top pt-2 border-danger text-justify">
              {inventory?.product?.product_short_desc}
            </p>
						{console.log(inventory?.product?.product_video_path)}
            {/* </Tab>}
				</Tabs> */}
          </Col>
          <Col lg={6} className="p-3">
            <video width="100%" height="240" controls>
              <source src={getStoragePath(inventory?.product?.product_video_path)} type="video/mp4" />
            </video>
          </Col>
        </Row>
        {/* <Tab eventKey="spacification" title="Spacification" className="pb-5 font-lato">
					<div className="detail-table border-top border-warning pt-3">
						{inventory?.product?.product_long_desc}
					</div>
				</Tab> */}
        {/* <Tab eventKey="review" title="Customer Review" className="pb-5 font-lato">
					<div className="border-top border-warning  pt-3">
						<div className="row">
							<div className="col-lg-4">
								<div className="d-flex justify-content-start w-100">
									<h2 className="font-48 text-warning pe-2 fw-bold font-lato">5.0</h2>
									<div className="">
										<p className="text-capitalize ps-2">avarage rating</p>
										<div className="d-flex justify-content-start align-items-center">
											<StarRatings
												rating={parseInt(inventory?.star_ratting || 0)}
												starRatedColor="orange"
												numberOfStars={5}
												starDimension="20px"
												starSpacing="0px"
												name='rating'
											/>
											<p className="text-secondary ps-2">
												( {inventory?.reviews_count || 0} review )
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								{reviewAbility ? (
									<form onSubmit={(event) => handleSubmit(event)}>
										<div className="">
											<p className="text-capitalize font-16">
												give your review *
											</p>

											<StarRatings
												rating={parseInt(formData?.ratting_number || 0)}
												starRatedColor="orange"
												starHoverColor="orange"
												numberOfStars={5}
												starDimension="40px"
												starSpacing="2px"
												name='rating'
												changeRating={handleChangeRating}
											/>

											<br/>
											<br/>

											{/*<label htmlFor="textarea" className="form-label font-16">
												Your comment *
											</label>
											<div className="form-floating">
												<textarea className="form-control rounded-0" name="comments"
														  value={formData?.comments}
														  placeholder="Leave a comment here" id="textarea"
														  style={{height: "150px"}}
														  onChange={(event) => handleChange(event)}>{formData?.comments}</textarea>
												<label htmlFor="floatingTextarea2">Comments</label>
											</div>
											<button type="submit"
													className="btn btn-primary submit-btn rounded-0 mt-3 px-5 py-2">
												Submit
											</button>
										</div>
									</form>
								) : (
									<h3 className="mt-3">
										You already posted your reviews,<br/> Thank you.
									</h3>
								)}
							</div>
						</div>
					</div>
				</Tab> */}
        {/* </Tabs> */}
      </Fragment>
    )
  );
};

export default ProductDescription;
