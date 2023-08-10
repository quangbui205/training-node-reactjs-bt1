import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import HomePage from "./pages/HomePage";
import Account from "./pages/Account";
import Address from "./pages/Address";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<Account />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
