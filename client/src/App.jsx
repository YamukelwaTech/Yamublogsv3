import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// so the logic with the pajsx is that it will hold the routing for all the other pages

const Home = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
