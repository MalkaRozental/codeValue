import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import { ProductList } from "./components/productsList/ProductList";
import { ProductAddEdit } from "./components/ProductAddEdit";
import { useProduct } from "./components/ProductProvider";
import { Header } from "./components/header/Header";

function App() {
  const { addNewProduct, selectedProduct } = useProduct();
  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Header />
        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <ProductList />
          {(addNewProduct || selectedProduct) && <ProductAddEdit />}
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
