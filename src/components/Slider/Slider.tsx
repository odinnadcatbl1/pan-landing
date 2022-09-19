import Carousel from "better-react-carousel";
import CustomDot from "./CustomDot";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import slide1 from "../../assets/slider/slide-1.jpg";
import slide2 from "../../assets/slider/slide-2.jpg";
import slide3 from "../../assets/slider/slide-3.jpg";
import slide4 from "../../assets/slider/slide-1.jpg";
import slide5 from "../../assets/slider/slide-2.jpg";
import slide6 from "../../assets/slider/slide-3.jpg";
import { ReactComponent as StarIcon } from "../../assets/slider/star.svg";

const Slider = () => {
    const slides = [
        {
            img: slide1,
            stars: 3,
        },
        {
            img: slide2,
            stars: 1,
        },
        {
            img: slide3,
            stars: 4,
        },
        {
            img: slide4,
            stars: 3,
        },
        {
            img: slide5,
            stars: 1,
        },

        {
            img: slide6,
            stars: 5,
        },
    ];

    return (
        <section className="slider">
            <div className="container">
                <div className="slider__inner">
                    <div className="slider__title">Обычный слайдер</div>
                    <div className="slider__items">
                        <Carousel
                            cols={3}
                            rows={1}
                            gap={30}
                            loop={true}
                            showDots={true}
                            dot={CustomDot}
                            autoplay={5000}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                        >
                            {slides.map((slide) => {
                                return (
                                    <Carousel.Item>
                                        <div className="slider__item">
                                            <div className="slider__img-container">
                                                <img
                                                    src={slide.img}
                                                    alt="slide"
                                                    className="slider__img"
                                                />
                                            </div>
                                            <ul className="slider__stars">
                                                {[...Array(5)].map((x, i) => {
                                                    if (i < slide.stars) {
                                                        return (
                                                            <li
                                                                className="slider__star"
                                                                key={i}
                                                            >
                                                                <StarIcon fill="#FF2D23" />
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li
                                                                className="slider__star"
                                                                key={i}
                                                            >
                                                                <StarIcon fill="white" />
                                                            </li>
                                                        );
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
