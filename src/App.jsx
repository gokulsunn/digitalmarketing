import Header from "./component/Header";
import Content from "./component/Content";
import Assets from "./component/Assets";
import Footer from "./component/Footer";
import Benifits from "./component/Benifits";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Grids from "./component/Grid";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Assets />
      <Content />
      <Grids />
      <Benifits />
      <Footer />
    </div>
  );
}

export default App;
