import CountUp from "react-countup";
import { BiPlus } from "react-icons/bi";
// could make a section and container components
const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-left">
                    <h1>Discover Most Suitable Property</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi nulla dolores culpa! Tenetur molestias iusto facere consectetur quo voluptatibus.</p>
                    <div className="hero-left-counts">
                        <div className="hero-count">
                            <div>
                                <CountUp start={8500} end={9000} duration={3} className="counting" />
                                <BiPlus className="counting-icon" />
                            </div>
                            <p>Premium Products</p>
                        </div>
                        <div className="hero-count">
                            <div>
                                {/* <CountUp start={1800} end={2000} duration={3} className="counting" /> */}
                                <CountUp start={1500} end={2000} duration={5} className="counting" />
                                <BiPlus className="counting-icon" />
                            </div>
                            <p>Happy Customers</p>
                        </div>
                        <div className="hero-count">
                            <div>
                                {/* <CountUp start={22} end={28} duration={3} className="counting" /> */}
                                <CountUp start={20} end={28} duration={5} className="counting" />
                                <BiPlus className="counting-icon" />
                            </div>
                            <p>Award Winnings</p>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="/images/hero-image.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
