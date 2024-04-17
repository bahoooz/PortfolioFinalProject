import GlobalPortfolio from "./global-code/GlobalPortfolio";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="111, 67, 255"
        innerSize={6}
        outerSize={50}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
      />
      <GlobalPortfolio />
    </>
  );
}

export default App;
