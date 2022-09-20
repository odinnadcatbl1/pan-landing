import React from "react";

interface IBlock {
    title: string;
    descr: string;
}

const InfoBlock = () => {
    const blocks: IBlock[] = [
        { title: "3,000", descr: "Агенств" },
        { title: "10,000", descr: "Партнеров" },
        { title: "80,000", descr: "Квартир в базе" },
        { title: "100+", descr: "Застройщиков" },
        { title: "200", descr: "Сотрудников" },
    ];

    return (
        <section className="infoBlock">
            <div className="container">
                <div className="infoBlock__inner">
                    <ul className="info__list">
                        {blocks.map((block) => {
                            return (
                                <li className="info__item">
                                    <div className="info__item-title">
                                        {block.title}
                                    </div>
                                    <div className="info__item-descr">
                                        {block.descr}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InfoBlock;
