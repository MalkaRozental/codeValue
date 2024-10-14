import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { Product } from "../../type";
import { useProduct } from "../ProductProvider";
import Fuse from "fuse.js";

export const ProductList = () => {
  const stateProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const [products, setProducts] = useState<Product[]>(stateProducts);
  const { query } = useProduct();

  const fuse = new Fuse<Product>(stateProducts, {
    keys: ["name", "description"],
  });

  useEffect(() => {
    if (query !== "") {
      const filterResult = fuse.search(query).map((item) => item.item);

      setProducts(filterResult);
    }
  }, [query]);
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      {products.map((product) => (
        <ProductItem key={`productItem-${product.name}`} product={product} />
      ))}
    </Box>
  );
};
