import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const companiesData = [
    { id: 1, imgSrc: "/images/company-1.png" },
    { id: 2, imgSrc: "/images/company-2.png" },
    { id: 3, imgSrc: "/images/company-3.png" },
    { id: 4, imgSrc: "/images/company-4.png" },
    { id: 5, imgSrc: "/images/company-5.png" },
    { id: 6, imgSrc: "/images/company-6.png" },
    { id: 7, imgSrc: "/images/company-7.png" },
    { id: 8, imgSrc: "/images/company-8.png" },
    { id: 9, imgSrc: "/images/company-9.png" },
];

const Companies = () => {
    return (
        <section className="companies-section">
            <Swiper slidesPerView={5} autoplay={{ delay: 2000, disableOnInteraction: false }} loop={true} modules={[Autoplay]} className="companies-slides">
                {companiesData.map((company) => {
                    return (
                        <SwiperSlide className="company-slide" key={company.id}>
                            <img src={company.imgSrc} alt="" className="company-img" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Companies;
