import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("All");
  const [isTopOfPage, setIsTopofPage] = useState("true");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
