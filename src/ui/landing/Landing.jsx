/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Heading from "../global/Heading";
import Button from "../global/Button";
import {
    TbMinus,
    TbPlus,
    TbStar,
    TbStarFilled,
    TbStarHalfFilled,
} from "react-icons/tb";

function Landing() {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero product" id="hero">
                <div className="container">
                    <div className="product-slides">
                        <div className="slider-banner" data-slider>
                            <figure className="product-banner">
                                <img
                                    src="/images/landing/image-1.png"
                                    width={600}
                                    height={600}
                                    loading="lazy"
                                    alt="Nike Sneaker"
                                    className="img-cover"
                                />
                            </figure>
                        </div>
                        {/* 
                        <button
                            className="slide-btn prev"
                            aria-label="Previous image"
                            data-prev
                        >
                            <ion-icon name="chevron-back" aria-hidden="true" />
                        </button>
                        <button
                            className="slide-btn next"
                            aria-label="Next image"
                            data-next
                        >
                            <ion-icon
                                name="chevron-forward"
                                aria-hidden="true"
                            />
                        </button> */}
                    </div>

                    <div className="product-content">
                        {/* <p className="product-subtitle">Nike Company</p> */}
                        <h1 className="h3 product-title">
                            Fall Limited Edition Sneakers
                        </h1>

                        <div className="star flex">
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                        </div>

                        <div className="wrapper">
                            <span className="price" data-total-price>
                                $125.00
                            </span>
                            <span className="badge">50%</span>
                            <del className="del">$250.00</del>
                        </div>

                        <p className="product-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. In necessitatibus perferendis facilis
                            veritatis, velit officiis quos consequatur soluta
                            deserunt? Voluptates.
                        </p>

                        <div className="btn-group">
                            <div className="counter-wrapper">
                                <button className="counter-btn" data-qty-minus>
                                    <TbMinus />
                                </button>
                                <span className="span" data-qty>
                                    1
                                </span>
                                <button className="counter-btn" data-qty-plus>
                                    <TbPlus />
                                </button>
                            </div>

                            <button className="cart-btn">
                                {/* <ion-icon
                                    name="bag-handle-outline"
                                    aria-hidden="true"
                                /> */}
                                <span className="span">Buy Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landing;
