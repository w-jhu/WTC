import "./Test.css";
import { Carousel } from "./Carousel";
import slides from "../data/testdata.json";

console.log("Slides:", slides);

const Test = () => {
    return <div className="test-carousel">
        <Carousel data={slides} />
    </div>;
};

export default Test;