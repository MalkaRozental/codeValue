import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import { Header } from "./components/header/Header";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./components/home";

function App() {
  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/product" />} />
            <Route path="/product" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
