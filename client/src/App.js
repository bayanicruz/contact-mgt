import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import TextField from "@mui/material/TextField";
import List from "@mui/material/List";

import ListItem from "./components/ListItem";

function App() {
  const [contactList, setContactList] = React.useState([
    { Name: "John Doe" },
    { Name: "Jane Doe" },
    { Name: "John Doe La Cruz" },
  ]);
  
  const handleSearch = () => {
    //do something
  };

  return (
    <Container>
      <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
        <Box sx={{ mx: "auto" }}>
          <h3>Contact Management</h3>
          <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: "100%" }} onChange={handleSearch}/>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {contactList.map((object) => (
              <ListItem contact={object} />
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
