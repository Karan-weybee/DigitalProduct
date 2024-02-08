import React from "react";
import ReactDOM from "react-dom";
import ReactImageZoom from "react-image-zoom";

import zoomImage from "../../../src/assets/images/product/4.png";

const Modal = () => {
  const closeProductDetails = () => {
    document.getElementById("productDetails").style.display = "none";
  };

  //   const props = { width: 400, height: 250, zoomWidth: 500, img: zoomImage };
  //   ReactDOM.render(
  //     <ReactImageZoom {...props} />,
  //     document.getElementById("ImageForZoom")
  //   );
  return (
    <>
      <div
        className="jquery-modal blocker current"
        id="productDetails"
        style={{ opacity: "1", display: "none", zIndex: "80" }}
      >
        <div
          className="modal"
          id="quick-view-modal"
          style={{
            opacity: "1",
            display: "inline-block",
            height: "77%",
            overflow: "scroll",
          }}
        >
          {/* <div className="modal" id="quick-view-modal" style={{ opacity: "1",display:'none' }}> */}
          <div className="product-quickview show">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product-detail__slide-one">
                  <div className="slider-wrapper slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                      <div>
                        <div style={{ width: "270px", margin: "auto" }}>
                          <img
                            id="ImageForZoom"
                            src={zoomImage}
                            alt="Product image"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <ReactImageZoom
                      width={270}
                      height={270}
                      zoomLensStyle={{
                        width: "150px",
                        height: "150px",
                      }}
                      zoomWidth={500}
                      img={zoomImage}
                    /> */}
                    <div
                      style={{
                        marginTop: "2em",
                        display: "flex",
                        maxWidth: "600px",
                        overflow: "scroll",
                        overflowY: "unset",
                        gap: "5px",
                      }}
                    >
                      <img
                        style={{ height: "150px" }}
                        src="./src/assets/images/product/4.png"
                        alt="Product image"
                      />
                      <img
                        style={{ height: "150px" }}
                        src="./src/assets/images/product/4.png"
                        alt="Product image"
                      />
                      <img
                        style={{ height: "150px" }}
                        src="./src/assets/images/product/4.png"
                        alt="Product image"
                      />
                      <img
                        style={{ height: "150px" }}
                        src="./src/assets/images/product/4.png"
                        alt="Product image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6" id="zoomImage">
                <div className="product-detail__content">
                  <div className="product-detail__content__header">
                    <h5>eyes</h5>
                    <h2>The expert mascaraa</h2>
                  </div>
                  <div className="product-detail__content__header__comment-block">
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>03 review</p>
                    <a href="#">Write a reviews</a>
                  </div>
                  <h3>$35.00</h3>
                  <div className="divider"></div>
                  <div className="product-detail__content__footer">
                    <ul>
                      <li>Brand:gucci</li>
                      <li>Product code: PM 01</li>
                      <li>Reward point: 30</li>
                      <li>Availability: In Stock</li>
                    </ul>
                    <div className="product-detail__colors">
                      <span>Color:</span>
                      <div
                        className="product-detail__colors__item"
                        style={{ backgroundColor: "#8b0000" }}
                      ></div>
                      <div
                        className="product-detail__colors__item"
                        style={{ backgroundColor: "#4169e1" }}
                      ></div>
                    </div>
                    <div className="product-detail__controller">
                      <div className="quantity-controller -border -round">
                        <div className="quantity-controller__btn -descrease">
                          -
                        </div>
                        <div className="quantity-controller__number">2</div>
                        <div className="quantity-controller__btn -increase">
                          +
                        </div>
                      </div>
                      <div className="add-to-cart -dark">
                        <a className="btn -round -red" href="#">
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <h5>Add to cart</h5>
                      </div>
                      <div className="product-detail__controler__actions"></div>
                      <a className="btn -round -white" href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#close-modal"
            rel="modal:close"
            class="close-modal "
            style={{ top: "5.5px", right: "11.5px" }}
            onClick={closeProductDetails}
          >
            Close
          </a>
        </div>
      </div>

      {/* <div class="drawer-backdrop fade show" id="fade-right"></div> */}
    </>
  );
};

export default Modal;
