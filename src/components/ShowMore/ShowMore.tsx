import { useState, useEffect } from "react";
import Button from "../Button/Button";

import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

const ShowMore: React.FC = () => {
    const [progress, setProgress] = useState(5);
    const [textIsActive, setTextActive] = useState(false);

    const handlerClick = () => {
        setProgress(progress + 25);
    };

    useEffect(() => {
        if (progress >= 100) {
            setProgress(100);
        }
    }, [progress]);

    return (
        <section className="showMore">
            <div className="container">
                <div className="showMore__inner">
                    <div className="showMore__left">
                        <div className="showMore__progressbar">
                            <div
                                className="progressbar__num"
                                style={{ width: `${progress}%` }}
                            >
                                {progress} %
                            </div>
                        </div>

                        <div className="showMore__button">
                            <Button onClick={handlerClick} text={"+ 25%"} />
                        </div>
                    </div>
                    <div className="showMore__right">
                        <div className="showMore__text">
                            Большинство онкологических пациентов испытывают
                            страх перед неизвестностью того, что их ожидает в
                            процессе лечения рака.
                        </div>
                        {textIsActive && (
                            <div className="showMore__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae, nihil. Commodi corrupti
                                magni hic soluta eveniet praesentium accusamus
                                odio sit vitae assumenda id facilis repudiandae
                                cum omnis ullam eligendi consequuntur minus
                                voluptate perferendis numquam eius, sed
                                voluptatibus! Iure iste, veritatis excepturi
                                harum dignissimos ab dolorum maiores officiis
                                soluta asperiores officia!
                            </div>
                        )}

                        <div
                            className="showMore__text-btn"
                            onClick={() => setTextActive(!textIsActive)}
                        >
                            Подробнее
                            {textIsActive ? (
                                <ArrowUp fill="#8F95AC" />
                            ) : (
                                <ArrowDown fill="#8F95AC" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowMore;
