import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import NotFoundPage from "./pages/NotFound";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div data-test="app">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllMeetupsPage />} />
          <Route path="new" element={<NewMeetupsPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
