import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Address from "./pages/Address";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
