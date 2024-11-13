import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const ListItem = ({ contact }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={contact.Name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText sx={{ pl: 4 }} primary="+61XXXXXXXXX" />
          <ListItemText sx={{ pl: 4 }} primary="username@domain.io" />
          <ListItemText sx={{ pl: 4 }} primary="1st January 1900" />
        </List>
      </Collapse>
    </Box>
  );
};

export default ListItem;
