import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4" data-testid="main">
        <article className="container mx-auto">
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
