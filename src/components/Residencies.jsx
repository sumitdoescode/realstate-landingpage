import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Mousewheel, Keyboard } from "swiper/modules";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Text from "./Text";
import SliderData from "../data/slider.json";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Residencies = () => {
    return (
        <section className="res-section">
            <div className="container">
                <SubTitle subTitle={"Best Choices"} />
                <Title title={"Popular Residencies"} />
                <Swiper slidesPerView={4} spaceBetween={40} mousewheel={true} keyboard={true} modules={[Mousewheel, Keyboard]} className="res-swiper">
                    <SwiperBtns />
                    {SliderData.map((slider) => {
                        return (
                            <SwiperSlide key={slider.id} className="res-swiper-slide">
                                <img src={slider.image} alt="" />
                                <h1>
                                    <span>$</span>
                                    {slider.price}
                                </h1>
                                <h2>{slider.name}</h2>
                                <Text text={slider.detail} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SwiperBtns = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-btns">
            <button onClick={() => swiper.slidePrev()}>
                <BsChevronLeft />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <BsChevronRight />
            </button>
        </div>
    );
};
