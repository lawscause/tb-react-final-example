import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import rootDirectory from "./pages/rootfolder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootDirectory} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={rootDirectory + "blogs"} element={<Blogs />} />
          <Route path={rootDirectory + "contact"} element={<Contact />} />
          <Route path={rootDirectory+ "*"} element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
