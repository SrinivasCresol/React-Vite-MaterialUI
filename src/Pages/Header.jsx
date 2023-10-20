import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            My Website
          </Typography>
          <Button onClick={() => navigate("/")} color="inherit">
            Login
          </Button>
          <Button onClick={() => navigate("/card")} color="inherit">
            Cards
          </Button>
          <Button onClick={() => navigate("/table")} color="inherit">
            Table
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
