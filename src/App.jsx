import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Coin from "./pages/Coin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
