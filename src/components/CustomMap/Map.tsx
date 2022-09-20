import { YMaps, Map, Placemark } from "react-yandex-maps";
import CustomPlacemark from "./CustomPlacemark";

const CustomMap: React.FC = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="map__inner">
                    <YMaps>
                        <Map
                            state={{ center: [59.946281, 30.355612], zoom: 14 }}
                            width={"100%"}
                            height={"50rem"}
                        ></Map>
                    </YMaps>
                    <CustomPlacemark />
                </div>
            </div>
        </section>
    );
};

export default CustomMap;
