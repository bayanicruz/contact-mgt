import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import TextField from '@mui/material/TextField';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function App() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    //setOpen(!open);
  };

  return (
    <Container>
      <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
        <Box sx={{ mx: "auto"}}>
          <h3>Contact Management</h3>
          <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width:"100%"}} />

          <List sx={{ width: "100%",bgcolor: "background.paper" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Juan Dela Cruz" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 4 }} primary="+61XXXXXXXXX" />
                <ListItemText sx={{ pl: 4 }} primary="username@domain.io" />
                <ListItemText sx={{ pl: 4 }} primary="1st January 1900" />
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="John Doe" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 4 }} primary="+61XXXXXXXXX" />
                <ListItemText sx={{ pl: 4 }} primary="username@domain.io" />
                <ListItemText sx={{ pl: 4 }} primary="1st January 1900" />
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Jane Doe" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 4 }} primary="+61XXXXXXXXX" />
                <ListItemText sx={{ pl: 4 }} primary="username@domain.io" />
                <ListItemText sx={{ pl: 4 }} primary="1st January 1900" />
              </List>
            </Collapse>
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
