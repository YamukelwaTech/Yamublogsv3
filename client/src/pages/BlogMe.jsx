import NavBar from "components/navBar";
import Footer from "components/footer";
import Form from "components/form";

function BlogMe() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default BlogMe;
