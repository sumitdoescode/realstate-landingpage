import React from "react";
import Title from "./Title";
import Text from "./Text";
const Subscribe = () => {
    return (
        <section className="sub-section">
            <div className="container">
                <div className="sub">
                    <div className="sub-content">
                        <Title title={"Get Started with Homyz"} />
                        <Text text={"Subscribe and find super attractive price quotes from us. Find your residence soon."} />
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
