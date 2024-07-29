import NavBar from "components/navBar";
import Footer from "components/footer";
import Blogs from "components/blogs";

function Postups() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default Postups;