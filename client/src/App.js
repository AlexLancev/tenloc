import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import { Excursions } from "./components/Excursions";
import { Layout } from "./components/Layout";
import { Presentation } from "./components/Presentation";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${paths.excursions}`} element={<Excursions />} />
          <Route path={`${paths.excursion}/:id`} element={<Presentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
