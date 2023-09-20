import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          w: "100%",
        }}
      >
        <Typography variant="h6">ПР№1 ОДОС Сушко</Typography>
        <Stack gap={2} direction="row">
          <Link to="/">Завдання</Link>
          <Link to="/calculator">Калькулятор</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
