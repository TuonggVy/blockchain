import ContentBedrock from "./components/ContentBedrock/ContentBedrock";
import ContentBitcoin from "./components/ContentBitcoin/ContentBitcoin";
import ContentPowering from "./components/ContentPowering/ContentPowering";
import LayerInfo from "./components/LayerInfo/LayerInfo";
import MainLayout from "../../layouts/MainLayout";

function Home() {
  return (
    <>
      <MainLayout >
      <ContentBitcoin />
      <ContentPowering />
      <ContentBedrock />
      <LayerInfo />
      </MainLayout>
    </>
  );
}

export default Home;
