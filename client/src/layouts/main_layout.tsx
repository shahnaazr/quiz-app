import { Outlet } from "react-router";
import Footer from "../components/footer";


const MainLayout = () => {
  return (
    <div> 
      <main data-testid="main">
        <article className="container px-10 mx-auto">
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
