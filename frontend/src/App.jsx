import { Route, Routes } from "react-router-dom";
import Layoult from "./Layoult";
import { About, Contact, Home, News, NotFound, Services } from "./pages";
import GetInvolved from "./pages/GetInvolved";
import Founder from "./pages/Founder";
import NewsShow from "./pages/NewsShow";
import './index.css';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layoult />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/what-we-do" element={<Services />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/show/:id" element={<NewsShow />} />
          <Route path="/meet-founder" element={<Founder />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
