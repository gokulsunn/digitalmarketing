import Header from "./component/Header";
import Content from "./component/Content";
import Assets from "./component/Assets";
import Footer from "./component/Footer";
import Benifits from "./component/Benifits";
import Slider from "./Slider";
import Navbar from "./component/Navbar";
import Grid from "./component/Grid"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Assets />
      <Content />
      <Grid />
      <Benifits />
      <Footer />
    </div>
  );
}

export default App;
