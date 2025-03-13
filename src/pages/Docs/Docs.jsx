import { useState } from "react";
import SearchPopup from "./components/Navbar/SearchPopup/SearchPopup";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import { DocsProvider } from "../../context/DocsContext";

function Docs() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenuLeft, setOpenMenuLeft] = useState(false);

  return (
    <>
      <DocsProvider>
        {/*Navbar */}
        <Navbar
          setOpenMenuLeft={setOpenMenuLeft}
          setOpenSearch={setOpenSearch}
        />

        {/*Search popup */}
        <SearchPopup openSearch={openSearch} setOpenSearch={setOpenSearch} />

        {/*Container */}
        <Container
          setOpenMenuLeft={setOpenMenuLeft}
          openMenuLeft={openMenuLeft}
        />
      </DocsProvider>
    </>
  );
}

export default Docs;
