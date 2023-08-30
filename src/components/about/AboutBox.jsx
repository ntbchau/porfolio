import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">50</h3>
                    <span className="about_subtitle">Projects practiced</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">500</h3>
                    <span className="about_subtitle">Cups of tea</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-location-pin"></i>
                <div>
                    <h3 className="about__title">20</h3>
                    <span className="about_subtitle">Countries visited</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">200</h3>
                    <span className="about_subtitle">Friends</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox