import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import GalleryPage from "./pages/GalleryPage";
import { ROUTES } from "./config/navigation";

export default function App () {
  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path={ ROUTES.users } element={ <UsersPage /> } />
          <Route path={ ROUTES.posts } element={ <PostsPage /> } />
          <Route path={ ROUTES.gallery } element={ <GalleryPage /> } />
          <Route path="*" element={ <Navigate to={ ROUTES.users } replace /> } />
        </Routes>
      </main>

      <footer className="footer">
        <span className="footer-brand">UserSpace</span>
        <span>People first. Always.</span>
      </footer>
    </div>

  );
}
