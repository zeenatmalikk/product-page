import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
const Header = () => {
  return (
    // <div className="cart-box">
    <div>
      <section class="top-bar cf">
        <div class="container">
          <div class="left">SNEAKERS</div>

          <div class="right">
            <div class="cart dropdowns">
              <div class="cart-dropdown-btn">
                <a href="#">
                  <ShoppingCartIcon style={{ color: "#333" }} />
                </a>
              </div>

              <div class="minicart-content">
                <ul class="ul-reset">
                  <li>
                    <div class="cart-prod-wrapper cf">
                      <div class="cart-image-wrapper">
                        <div class="cart-image">
                          <a href="#">
                            <img
                              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/323039/spidey-small.jpg"
                              alt="Product One"
                            />
                          </a>
                        </div>
                      </div>

                      <div class="cart-details">
                        <div class="cart-name">
                          <a href="#">
                            Square Enix Marvel Spider-Man Play Arts Kai Figure
                          </a>
                        </div>
                        <div class="cart-price">£89.99</div>
                      </div>

                      <div class="cart-qty">
                        <div class="cart-qty-name">QTY:</div>
                        <div class="cart-qty-value">1</div>
                      </div>
                    </div>
                  </li>

                </ul>

                <div class="cart-btns-wrapper">
                  <a
                    class="cart-btn checkout"
                    href="index.asp?function=CHECKOUT"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
