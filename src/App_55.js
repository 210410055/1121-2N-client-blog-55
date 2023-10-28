import { BrowserRouter, Routes,Route } from "react-router-dom";

import Bloglocaljson_55 from "./pages/bloglocaljson";
import BlogSupabase_55 from "./pages/blogsupabase_55";
import BlogStaticPage55 from "./pages/blogstaticpage_55"
import BlogNodeServer_55 from "./pages/blognodeserver_55";
import Homepage_55 from "./pages/HomePage";
const App_55 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/local_55" element={<Bloglocaljson_55/>} />
      <Route path="/supa_55" element={<BlogSupabase_55/>} />
      <Route path="" element={<Homepage_55/>} />
      <Route path="/static_55" 
      element={< BlogStaticPage55 />} />
      <Route path="/node_55"
      element={<BlogNodeServer_55/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App_55;
