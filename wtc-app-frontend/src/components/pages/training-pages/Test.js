import "./Test.css";
import { Carousel } from "./Carousel";
import TimerBar from './timerBar';
import slides from "../data/testdata.json";

console.log("Slides:", slides);

const Test = () => {
    return (
        <div>
          <div className="test-carousel">
            <Carousel data={slides} />
          </div>
          <div className="timer">
            <TimerBar durationInSeconds={120} />
          </div>
        </div>
      );
};

export default Test;