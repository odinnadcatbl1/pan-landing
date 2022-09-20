import CustomMap from "./components/CustomMap/Map";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoBlock from "./components/InfoBlock/InfoBlock";
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
            <InfoBlock />
            <Footer />
        </div>
    );
};

export default App;
