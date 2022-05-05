import "./styles.css";
import GradientText from "./UI/Text/GradientText";
let grt = {
  backgroundImage: `linear-gradient(to bottom right, #04b4b2, #ff00b2)`
};
export default function App() {
  return (
    <div className="App">
      <p style={{ fontSize: `50px` }}>
        What
        <GradientText text="Hello World" gt={grt} space cn="text-gradient" />
        the
      </p>
    </div>
  );
}
