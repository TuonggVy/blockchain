import ContentBedrock from "./components/ContentBedrock/ContentBedrock";
import ContentBitcoin from "./components/ContentBitcoin/ContentBitcoin";
import ContentPowering from "./components/ContentPowering/ContentPowering";
import LayerInfo from "./components/LayerInfo/LayerInfo";
import MainLayout from "../../layouts/MainLayout";
import WhatsNew from "./components/WhatsNew/WhatsNew";

function Home() {
  return (
    <>
      <MainLayout >
      <ContentBitcoin />
      <ContentPowering />
      <ContentBedrock />
      <LayerInfo />
      <WhatsNew />
      </MainLayout>
    </>
  );
}

export default Home;
