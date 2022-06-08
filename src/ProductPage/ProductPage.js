import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./ProductPage.css";
import { Container } from "@mui/system";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import CarouselSlider from "../Carousel/Carousel";
const ProductPage = () => {
  const [counter, setcounter] = useState(1);

  return (
    <div>
      <Container>
        <Grid container className="product-page">
          <Grid
            item
            md={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CarouselSlider />
          </Grid>
          <Grid item md={6} xs={12} className="prod-details">
            <p className="co-name">Sneaker Company</p>
            <h2 className="product-name">Fall limited edition sneakers</h2>
            <p className="product-details">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="price-flex">
              <p className="product-price">$125.00</p>
              <span className="price-discount">50%</span>
            </div>
            <s className="original-price">$250</s>
            <div className="counter-cart">
              <div className="counter">
                <img src={minus} alt="minus" />
                <input
                  type="number"
                  placeholder=""
                  value={counter}
                  onChange={(e) => setcounter(e.target.value)}
                />
                {/* <h4 className="quantity-cart">0</h4> */}
                <img src={plus} alt="plus" />
              </div>
             <div className="cart-btn-container">
             <button className="cart-btn-add">
                <svg
                  style={{ marginRight: "10px" }}
                  width="22"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fill-rule="nonzero"
                  />
                </svg>{" "}
                Add To Cart
              </button>
             </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;
