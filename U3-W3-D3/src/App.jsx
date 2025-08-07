import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./Components/MainSearch";
import CompanySearchResults from "./Components/CompanySearchResults";
import FavouritesPage from "./Components/FavouritesPage"; // ⬅️ nuovo import
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouritesPage />} />{" "}
        {/* ⬅️ nuova route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
