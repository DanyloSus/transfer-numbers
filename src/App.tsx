import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import Header from "./Elements/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Routes>
          <Route path="/calculator" element={<></>}></Route>
          <Route path="/" element={<></>}></Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
