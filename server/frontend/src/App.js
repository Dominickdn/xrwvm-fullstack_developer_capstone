import Register from "./components/Register/Register";
import LoginPanel from "./components/Login/Login";
import Dealer from "./components/Dealers/Dealer"
import Dealers from './components/Dealers/Dealers';
import PostReview from "./components/Dealers/PostReview"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App
