import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function BottomDrawer({ createContact }) {
  const [state, setState] = React.useState(false);

  const [name, setName] = React.useState();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const handleAddContact = (value) => {
    createContact(value);
    setState(false);
  };

  const list = () => (
    <Box sx={{ width: "auto", height: 850 }} role="presentation">
      <Grid container>
        <Grid item xs={4}>
          <Button
            variant="text"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center" }}>
            <h3>New Contact</h3>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ float: "right" }}>
            <Button variant="text" onClick={() => handleAddContact(name)}>
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem disablePadding>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "100%", m: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {
        // <React.Fragment key={anchor}> for loop?
        <Box sx={{ float: "right" }}>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={toggleDrawer(true)}
          >
            <AddBoxIcon fontSize="inherit" />
          </IconButton>
          <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Box>
      }
    </div>
  );
}
