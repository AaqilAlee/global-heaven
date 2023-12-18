import React, { useEffect, useState } from "react";
import { getStoragePath } from "../../utils/helpers";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

const ImageSection = ({ inventory }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomimg, setZoomImg] = useState();

  let thumbnailImage = "";
  let galleryImages = [];

  if (inventory?.image) {
    thumbnailImage = getStoragePath(`inventory-image/${inventory?.image}`);
  } else {
    thumbnailImage = getStoragePath(
      `product-image/${inventory?.product?.image}`
    );
  }

  if (inventory?.inventory_images) {
    inventory?.inventory_images?.map((inventory_image) => {
      galleryImages.push(
        getStoragePath(`inventory-multi-image/${inventory_image?.image}`)
      );
    });
  } else {
    inventory?.product?.product_images?.map((product_image) => {
      galleryImages.push(
        getStoragePath(`product-multi-image/${product_image?.image}`)
      );
    });
  }

  return (
    <>
      {thumbnailImage && (
        // <img
        //   src={thumbnailImage}
        //   alt="product-img-two"
        //   className="single-object"
        // />
        <div className="p-5 ">
          <InnerImageZoom
            className="w-100 h-90"
            zoomType="hover"
            src={thumbnailImage}
            zoomSrc={thumbnailImage}
          />
        </div>
      )}
    </>
  );
};
export default ImageSection;
