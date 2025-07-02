import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Layout from "./components/Layout";
import Preview from "./pages/Preview"; 
import Posts from './pages/Posts';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
}

export default App;
