import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
