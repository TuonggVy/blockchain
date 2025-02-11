import ContentBedrock from "./components/ContentBedrock/ContentBedrock";
import ContentBitcoin from "./components/ContentBitcoin/ContentBitcoin";
import ContentPowering from "./components/ContentPowering/ContentPowering";
import LayerInfo from "./components/LayerInfo/LayerInfo";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <ContentBitcoin />
      <ContentPowering />
      <ContentBedrock />
      <LayerInfo />
      <Footer />
    </>
  );
}

export default Home;
