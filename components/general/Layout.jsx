import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="middle">{children}</div>
      </div>
      <Footer />
    </>
  );
}
