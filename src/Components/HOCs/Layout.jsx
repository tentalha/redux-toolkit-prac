import Footer from "../Footer";
import Navabr from "../Navabr";

const Layout = ({ children }) => {
  return (
    <div>
      <Navabr />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
