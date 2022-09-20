import CustomMap from "./components/CustomMap/Map";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ShowMore from "./components/ShowMore/ShowMore";
import Slider from "./components/Slider/Slider";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Intro />
            <Slider />
            <ShowMore />
            <CustomMap />
        </div>
    );
};

export default App;
