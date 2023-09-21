import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import Header from "./Elements/Header";
import Calculator from "./Elements/Calculator";

const App = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Routes>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/" element={<></>}></Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
