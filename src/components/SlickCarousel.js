// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {

    render() {
        const settings = {
            speed: 1100,
            infinite: true,
            slidesToShow: (window.screen.height<440 ? 2 : 5),
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: true
        };
        return (
            <div>

                <Slider {...settings}>
                    <div className="slick-item">
                        <div className="item slick-slide slick-cloned"  data-slick-index="-4"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img className="slick-image" src="https://arzjoo.com/images/chart/74.png"
                                          />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    DOGE/BTC
                                    <span className="percentage">
                        <span >
                            -0.51%
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.00000027362</span>
                        </strong>
                    </span>
                                    <span className="unit">DOGE</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>48949587.9819</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="slick-item">

                        <div className="item slick-slide slick-cloned"  data-slick-index="-2"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img className="slick-image" src="https://arzjoo.com/images/chart/2239.png"
                                         />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    LEND/BTC
                                    <span className="percentage">
                        <span >
                            %
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.00000060</span>
                        </strong>
                    </span>
                                    <span className="unit">LEND</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>50459.8866367</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="slick-item">

                        <div className="item slick-slide slick-cloned"  data-slick-index="-1"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img className="slick-image" src="https://arzjoo.com/images/chart/109.png"
                                       />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    DGB/BTC
                                    <span className="percentage">
                        <span >
                            -0.21%
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.0000009913</span>
                        </strong>
                    </span>
                                    <span className="unit">DGB</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>3912135.66299</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="slick-item">

                        <div className="item slick-slide slick-cloned" data-slick-index="15"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img src="https://arzjoo.com/images/chart/2010.png"
                                          />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    ADA/BTC
                                    <span className="percentage">
                        <span >
                            -0.35%
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.00000482</span>
                        </strong>
                    </span>
                                    <span className="unit">ADA</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>60031130.0514</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="slick-item">

                        <div className="item slick-slide slick-cloned" data-slick-index="21"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img className="slick-image" src="https://arzjoo.com/images/chart/109.png"   />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    DGB/BTC
                                    <span className="percentage">
                        <span >
                            -0.21%
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.0000009913</span>
                        </strong>
                    </span>
                                    <span className="unit">DGB</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>3912135.66299</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="slick-item">

                        <div className="item slick-slide slick-cloned" data-slick-index="12"
                             aria-hidden="true">
                            <div className="chart">
                                <span>
                                    <img className="slick-image" src="https://arzjoo.com/images/chart/1027.png" />
                                </span>
                            </div>

                            <div className="box">
                                <div className="title">
                                    ETH/BTC
                                    <span className="percentage">
                        <span >
                            0.17%
                        </span>
                    </span>
                                </div>
                                <div className="desc">
                    <span className="amount">
                        <strong>
                            <span>0.02233900</span>
                        </strong>
                    </span>
                                    <span className="unit">ETH</span>
                                </div>
                                <div className="volume">
                    <span>
                        <span>Volume</span>:
                        <span className="amount">
                            <span>9499969852.06</span>
                        </span>
                    </span>
                                    <span className="unit">USD</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}
export default SimpleSlider;
