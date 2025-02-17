import { useState } from "react";
import SearchPopup from "./components/Navbar/SearchPopup/SearchPopup";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";

function Docs() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      {/*Navbar */}
      <Navbar setOpenSearch={setOpenSearch} />

      {/*Search popup */}
      <SearchPopup openSearch={openSearch} setOpenSearch={setOpenSearch} />

      {/*Container */}
      <Container/>
    </>
  );
}

export default Docs;
