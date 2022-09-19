import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Slider from "./components/Slider/Slider";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Intro />
            <Slider />
        </div>
    );
};

export default App;
