import { FormControl, TextField } from "@mui/material";
import { useProduct } from "../ProductProvider";

export const Search = () => {
  const { setQuery } = useProduct();
  return (
    <FormControl style={{ margin: 0 }}>
      <TextField
        size="small"
        variant="outlined"
        onChange={(event) => setQuery(event.target.value)}
      />
    </FormControl>
  );
};
