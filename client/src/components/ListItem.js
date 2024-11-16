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
        <ListItemText primary={contact.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText sx={{ pl: 4 }} primary={contact.phone || 'No phone'} />
          <ListItemText sx={{ pl: 4 }} primary={contact.email} />
          <ListItemText sx={{ pl: 4 }} primary={new Date(contact.dateOfBirth).toLocaleDateString()} />
        </List>
      </Collapse>
    </Box>
  );
};

export default ListItem;
