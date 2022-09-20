import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-up.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__button">
                        <AnchorLink href="#header">
                            <div className="anchorlink__descr">Наверх</div>
                            <div className="anchorlink__img">
                                <ArrowIcon />
                            </div>
                        </AnchorLink>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__address">
                            Санкт-Петербург, Владимирский пр., д. 3лит. А, офис
                            701
                        </div>
                        <a
                            href="tel:+ 7 (812) 445-68-09"
                            className="footer__tel"
                        >
                            + 7 (812) 445-68-09
                        </a>

                        <a className="footer__link">Напишите нам</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
