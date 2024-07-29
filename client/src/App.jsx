import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import assets from "assets";

const Home = lazy(() => import('pages/HomePage'));
const Blogs = lazy(() => import('pages/PostUps'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen w-screen fixed inset-0">
          <img src={assets.load} alt="Loading..." className="w-24 h-24" />
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
