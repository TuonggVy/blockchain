import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ContentBitcoin from "./component/ContentBitcoin/ContentBitcoin";
import ContentPowering from "./component/ContentPowering/ContentPowering";
import ContentBedrock from "./component/ContentBedrock/ContentBedrock";
import LayerInfo from "./component/LayerInfo/LayerInfo";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ContentBitcoin />
        <ContentPowering />
        <ContentBedrock />
        <LayerInfo />

        <Footer />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
